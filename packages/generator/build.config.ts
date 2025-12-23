import { defineBuildConfig } from 'unbuild';
import path from 'path';
import dotenv from 'dotenv';

// 加载环境变量 (优先加载本地，回退到根目录)
dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config({ path: path.join(__dirname, '../../.env') });

// 解析 DATABASE_URL (格式: mysql://user:pass@host:port/db)
const dbUrl = process.env.DATABASE_URL || '';
let dbConfig = {
  host: process.env.DATABASE_HOST || '',
  user: process.env.DATABASE_USER || '',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || '',
  port: process.env.DATABASE_PORT || '3306'
};

// 如果有 DATABASE_URL 但没有单独的变量，尝试解析它·
if (dbUrl && (!dbConfig.host || !dbConfig.user)) {
  try {
    const url = new URL(dbUrl);
    dbConfig.host = url.hostname;
    dbConfig.user = url.username;
    dbConfig.password = url.password;
    dbConfig.database = url.pathname.replace(/^\//, '');
    dbConfig.port = url.port || '3306';
  } catch (e) {
    console.warn('Failed to parse DATABASE_URL:', e);
  }
}

export default defineBuildConfig({
  clean: true,
  declaration: true,
  entries: [
    'src/index'
  ],
  rollup: {
    emitCJS: true,
    replace: {
      preventAssignment: true,
      values: {
        'process.env.DATABASE_HOST': JSON.stringify(dbConfig.host),
        'process.env.DATABASE_USER': JSON.stringify(dbConfig.user),
        'process.env.DATABASE_PASSWORD': JSON.stringify(dbConfig.password),
        'process.env.DATABASE_NAME': JSON.stringify(dbConfig.database),
        'process.env.DATABASE_PORT': JSON.stringify(dbConfig.port),
      }
    }
  },
  failOnWarn: false,
});