import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  clean: true,
  declaration: false,
  entries: [
    // 编译整个 src 目录为 ESM
    { input: 'src/', builder: 'mkdist', format: 'esm', ext: 'mjs' },
    // 如需同时生成 CJS 版本，可加一行
    { input: 'src/', builder: 'mkdist', format: 'cjs', ext: 'cjs' },
  ],
  // 常见：让依赖保持 external（库分发推荐）
  // externals: ['@prisma/client', 'prisma', /* 其他运行时依赖 */],
});