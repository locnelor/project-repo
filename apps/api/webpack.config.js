const path = require('node:path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const { swcOptions }
  = require('@nestjs/cli/lib/compiler/defaults/swc-defaults').swcDefaultsFactory()

/**
 * Webpack config exported as a function so we can switch behaviour
 * based on the current build mode.
 *
 * - 开发模式 (`webpack --mode development` / `NODE_ENV=development`)
 *   · 使用 `webpack-node-externals`，不打包 node_modules，加快编译与启动
 *
 * - 生产模式 (`webpack --mode production` / `NODE_ENV=production`)
 *   · 不排除任何 external，所有依赖都会打入 bundle，方便单文件部署
 */
module.exports = (env, argv) => {
  const lifecycle = process.env.npm_lifecycle_event
  const modeArg = argv && typeof argv.mode === 'string' ? argv.mode : undefined
  const isProd
    = env === 'production'
      || (env && (env.production === true || env.prod === true))
      || modeArg === 'production'
      || process.env.WEBPACK_MODE === 'production'
      || process.env.NODE_ENV === 'production'
      || lifecycle === 'build'

  return {
    entry: './src/main.ts',
    target: 'node',

    // 根据环境决定是否 external node_modules
    externals: isProd ? [] : [nodeExternals()],

    module: {
      rules: [
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: 'swc-loader',
            options: swcOptions,
          },
        },
      ],
    },

    resolve: {
      extensions: ['.ts', '.js'],
      plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
    },
  }
}
