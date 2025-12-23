
import { getDMMF } from '@prisma/internals';
import path from 'path';
import fs from 'fs';
import { Document } from './dmmf';
export const getPrismaDMMF = async (): Promise<Document> => {

    const possiblePaths = [
        path.join(process.cwd(), 'packages/database/prisma/schema/schema.prisma'),
        path.join(process.cwd(), 'prisma/schema/schema.prisma'),
        path.resolve(__dirname, '../../database/prisma/schema/schema.prisma'),
        path.resolve(__dirname, '../prisma/schema/schema.prisma'),
        path.resolve(__dirname, '../../prisma/schema/schema.prisma'),
    ];

    let schemaPath = '';
    for (const p of possiblePaths) {
        if (fs.existsSync(p)) {
            schemaPath = p;
            break;
        }
    }

    if (!schemaPath) {
        console.warn(`Prisma schema file not found in: ${possiblePaths.join(', ')}. trying to use process.cwd()`);
    }

    if (!schemaPath) {
        throw new Error(`Prisma schema file not found. Searched in: ${possiblePaths.join(', ')}`);
    }

    let datamodel = fs.readFileSync(schemaPath, 'utf-8');

    const schemaDir = path.dirname(schemaPath);
    const modelsDir = path.join(schemaDir, 'models');

    if (fs.existsSync(modelsDir) && fs.statSync(modelsDir).isDirectory()) {
        const files = fs.readdirSync(modelsDir);
        for (const file of files) {
            if (file.endsWith('.prisma')) {
                const modelPath = path.join(modelsDir, file);
                const modelContent = fs.readFileSync(modelPath, 'utf-8');
                datamodel += '\n' + modelContent;
            }
        }
    }

    return getDMMF({ datamodel });
}