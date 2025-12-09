// import { Project, IndentationText, QuoteKind } from 'ts-morph';
// import * as fs from 'fs';
// import * as path from 'path';
// import { execSync } from 'child_process';

// // Path to the schema directory (now a folder)
// const schemaDir = path.resolve(__dirname, '../../../packages/database/prisma/schema');
// const outputDir = path.resolve(__dirname, '../libs/prisma/src/models');

// if (!fs.existsSync(outputDir)) {
//   fs.mkdirSync(outputDir, { recursive: true });
// }

// // Helper to find all .prisma files recursively
// function findPrismaFiles(dir: string): string[] {
//   let results: string[] = [];
//   const list = fs.readdirSync(dir);
  
//   for (const file of list) {
//     const filePath = path.join(dir, file);
//     const stat = fs.statSync(filePath);
    
//     if (stat && stat.isDirectory()) {
//       results = results.concat(findPrismaFiles(filePath));
//     } else {
//       if (file.endsWith('.prisma')) {
//         results.push(filePath);
//       }
//     }
//   }
//   return results;
// }

// // Read all .prisma files in the schema directory
// console.log(`Reading schemas from ${schemaDir}...`);
// const prismaFiles = findPrismaFiles(schemaDir);
// let schemaContent = '';

// for (const filePath of prismaFiles) {
//   const content = fs.readFileSync(filePath, 'utf-8');
//   schemaContent += content + '\n';
// }

// console.log(`Loaded ${prismaFiles.length} schema files.`);

// interface Field {
//   name: string;
//   type: string;
//   isOptional: boolean;
//   isArray: boolean;
//   comments: string[];
// }

// interface Model {
//   name: string;
//   fields: Field[];
//   comments: string[];
// }

// interface Enum {
//   name: string;
//   values: string[];
// }

// function parseSchema(content: string) {
//   const models: Model[] = [];
//   const enums: Enum[] = [];
//   const lines = content.split('\n');
//   let currentModel: Model | null = null;
//   let currentEnum: Enum | null = null;
//   let currentComments: string[] = [];

//   for (const line of lines) {
//     const trimmed = line.trim();
//     if (trimmed.startsWith('///')) {
//       currentComments.push(trimmed.replace('///', '').trim());
//       continue;
//     }

//     if (trimmed.startsWith('model ')) {
//       const name = trimmed.split(/\s+/)[1];
//       currentModel = {
//         name,
//         fields: [],
//         comments: [...currentComments],
//       };
//       currentComments = [];
//       continue;
//     }

//     if (trimmed.startsWith('enum ')) {
//       const name = trimmed.split(/\s+/)[1];
//       currentEnum = {
//         name,
//         values: [],
//       };
//       currentComments = [];
//       continue;
//     }

//     if (trimmed.startsWith('}')) {
//       if (currentModel) {
//         models.push(currentModel);
//         currentModel = null;
//       }
//       if (currentEnum) {
//         enums.push(currentEnum);
//         currentEnum = null;
//       }
//       continue;
//     }

//     if (currentModel && trimmed && !trimmed.startsWith('//') && !trimmed.startsWith('@@')) {
//       const parts = trimmed.split(/\s+/);
//       if (parts.length >= 2) {
//         const name = parts[0];
//         const typeStr = parts[1];
        
//         const isOptional = typeStr.endsWith('?');
//         const isArray = typeStr.endsWith('[]');
//         const type = typeStr.replace('?', '').replace('[]', '');

//         currentModel.fields.push({
//           name,
//           type,
//           isOptional,
//           isArray,
//           comments: [...currentComments],
//         });
//         currentComments = [];
//       }
//     }

//     if (currentEnum && trimmed && !trimmed.startsWith('//')) {
//         const value = trimmed.split(/\s+/)[0]; // Just the value name
//         if (value) {
//             currentEnum.values.push(value);
//         }
//     }

//     if (!trimmed.startsWith('///') && trimmed !== '') {
//         if (trimmed === '') currentComments = [];
//     }
//   }
//   return { models, enums };
// }

// const { models: parsedModels, enums: parsedEnums } = parseSchema(schemaContent);
// const enumNames = new Set(parsedEnums.map(e => e.name));
// const modelNames = new Set(parsedModels.map(m => m.name));

// const project = new Project({
//   manipulationSettings: {
//     indentationText: IndentationText.TwoSpaces,
//     quoteKind: QuoteKind.Single,
//   },
// });

// function pascalCase(str: string) {
//   return str.replace(/(^|_)(\w)/g, (m, $1, $2) => $2.toUpperCase());
// }

// function mapPrismaTypeToTs(type: string): string {
//   if (enumNames.has(type)) return type;
//   switch (type) {
//     case 'String': return 'string';
//     case 'Int': return 'number';
//     case 'Boolean': return 'boolean';
//     case 'DateTime': return 'Date';
//     case 'BigInt': return 'bigint';
//     case 'Float': return 'number';
//     case 'Decimal': return 'string';
//     case 'Json': return 'any';
//     default: return 'any';
//   }
// }

// for (const model of parsedModels) {
//   const sourceFile = project.createSourceFile(
//     path.join(outputDir, `${model.name}.ts`),
//     '',
//     { overwrite: true }
//   );

//   sourceFile.addImportDeclaration({
//     moduleSpecifier: '@repo/database',
//     namedImports: [model.name],
//   });
  
//   // Add imports for enums if used
//   const usedEnums = model.fields
//     .map(f => f.type)
//     .filter(t => enumNames.has(t));
  
//   if (usedEnums.length > 0) {
//       sourceFile.addImportDeclaration({
//           moduleSpecifier: '@repo/database',
//           namedImports: [...new Set(usedEnums)],
//       });
//   }

//   sourceFile.addImportDeclaration({
//     moduleSpecifier: '@nestjs/swagger',
//     namedImports: ['ApiProperty'],
//   });
//   sourceFile.addImportDeclaration({
//     moduleSpecifier: 'class-transformer',
//     namedImports: ['Expose'],
//   });

//   const className = pascalCase(model.name) + 'Model';
//   const classDeclaration = sourceFile.addClass({
//     name: className,
//     isExported: true,
//     implements: [model.name],
//   });

//   if (model.comments.length > 0) {
//     classDeclaration.addJsDoc(model.comments.join('\n'));
//   }

//   for (const field of model.fields) {
//     // Exclude relation fields (if type is another model)
//     if (modelNames.has(field.type)) continue;

//     const tsType = mapPrismaTypeToTs(field.type);
    
//     const prop = classDeclaration.addProperty({
//       name: field.name,
//       type: tsType,
//       hasQuestionToken: field.isOptional,
//     });

//     const description = field.comments.join(' ');
    
//     const apiPropArgs: any = { description };
//     if (field.isOptional) apiPropArgs.required = false;
    
//     // Convert object to string for decorator argument
//     const argsString = JSON.stringify(apiPropArgs).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'");

//     prop.addDecorator({
//       name: 'ApiProperty',
//       arguments: [argsString],
//     });
    
//     prop.addDecorator({
//       name: 'Expose',
//       arguments: [],
//     });
//   }
// }

// // Generate index.ts
// const indexFile = project.createSourceFile(path.join(outputDir, 'index.ts'), '', { overwrite: true });
// for (const model of parsedModels) {
//   indexFile.addExportDeclaration({
//     moduleSpecifier: `./${model.name}`,
//   });
// }

// project.saveSync();

// console.log(`Models generated successfully in libs/prisma/src/models (${parsedModels.length} models)`);

// // Format schema
// console.log('Formatting Prisma schema...');
// try {
//   execSync('pnpm run format', { 
//     cwd: path.resolve(__dirname, '../../../packages/database'), 
//     stdio: 'inherit' 
//   });
// } catch (e) {
//   console.error('Failed to format prisma schema', e);
// }
