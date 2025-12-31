import { getPrismaDMMF } from "@repo/generator"
/**
 * Beat
 * 生成 prisma 模型
 */
import { Prisma } from "@repo/database";
import * as path from "path";
import { Project, IndentationText, QuoteKind, ClassDeclaration } from "ts-morph";
import * as fs from 'fs'
const outputDir = path.resolve(__dirname, '../libs/prisma/src/models');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}
const TypeMap = {
    'String': 'string',
    'Int': 'number',
    'DateTime': 'Date',
    'Boolean': 'boolean',
    'BigInt': 'bigint'
}
const defaultDescription = {
    id: "主键ID",
    create_time: '创建时间',
    update_time: '修改时间',
    create_by: '创建人',
    update_by: '修改人',
    deleted: '是否已删除'
}

const project = new Project({
    manipulationSettings: {
        indentationText: IndentationText.TwoSpaces,
        quoteKind: QuoteKind.Single,
    },
});

const generateArgument = (field: any) => {
    const props: string[] = [];
    const description = defaultDescription[field.name] || field.documentation || '';
    props.push(`description: '${description}'`);
    if (field.relationName) {
        props.push(`type: () => ${getModelClassName(field.type)}`);
    } else {
        const typeMap: Record<string, string> = {
            'String': 'String',
            'Int': 'Number',
            'BigInt': 'BigInt',
            'Boolean': 'Boolean',
            'DateTime': 'Date'
        };
        if (typeMap[field.type]) {
            props.push(`type: ${typeMap[field.type]}`);
        }
    }
    if (!field.isRequired) props.push('nullable: true');
    if (field.isList) props.push('isArray: true');
    if (field.isRequired && !field.relationName) props.push('required: true');
    if (field.kind === 'enum') props.push(`enum: ${field.type}`);

    return `{ ${props.join(', ')} }`;
}


const getFieldType = (field: any) => {
    if (!!TypeMap[field.type]) return TypeMap[field.type] + (field.isRequired ? '' : ' | null');
    // 表关联
    if (!!field.relationName) {
        const name = getModelClassName(field.type)
        if (field.isList) return name + '[]'
        return name;
    }
    if (field.kind === 'enum') {
        return field.type + (field.isRequired ? '' : ' | null');
    }
}
const getModelClassName = (modelName: string) => {
    return modelName + 'Model'
}

const addProperty = (classDeclaration: ClassDeclaration, field: any, index: number) => {
    const declaration = classDeclaration.addProperty({
        name: field.name,
        type: getFieldType(field),
        hasQuestionToken: !!field.relationName,
        leadingTrivia: index === 0 ? undefined : writer => writer.newLine()
    })
    if (!!field.relationName) return; // 关系不生成字段
    declaration.addDecorator({
        name: 'ApiField',
        arguments: [
            generateArgument(field)
        ]
    })
}


const main = async () => {
    const dmmf = await getPrismaDMMF()
    const sourceFile = project.createSourceFile(
        path.join(outputDir, `index.ts`),
        '',
        { overwrite: true }
    );
    const modelNames = dmmf.datamodel.models.map(e => e.name);
    sourceFile.addExportDeclarations(
        modelNames.map(name => ({
            moduleSpecifier: `./${name}`,
        }))
    )
    for (const model of dmmf.datamodel.models) {
        const modelName = model.name;
        // 创建源文件 [tableName].ts
        const sourceFile = project.createSourceFile(
            path.join(outputDir, `${modelName}.ts`),
            '',
            { overwrite: true }
        );

        const databaseImports = new Set<string>();
        for (const field of model.fields) {
            if (field.kind === 'enum') {
                databaseImports.add(field.type);
            }
        }
        databaseImports.add(modelName)
        // 添加对应表
        sourceFile.addImportDeclaration({
            moduleSpecifier: '@repo/database',
            namedImports: [...databaseImports],
        });

        //添加注解
        sourceFile.addImportDeclaration({
            moduleSpecifier: '@app/api-kit',
            namedImports: ['ApiField'],
        })


        // 导入关联表
        const tableNames = new Set(model.fields.filter(e => Prisma.ModelName[e.type]).map(e => e.type));
        tableNames.delete(modelName);
        for (const tableName of tableNames) {
            sourceFile.addImportDeclaration({
                moduleSpecifier: `./${tableName}`,
                namedImports: [getModelClassName(tableName)]
            })
        }

        // 添加类
        const classDeclaration = sourceFile.addClass({
            name: getModelClassName(modelName),
            isExported: true,
            implements: [modelName],
        })
        // 添加项
        for (let i = 0; i < model.fields.length; i++) {
            const field = model.fields[i];
            addProperty(classDeclaration, field, i);
        }
    }

    project.saveSync()
}
main()