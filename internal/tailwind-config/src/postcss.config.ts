import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcssImport from 'postcss-import'
import tailwindcss from 'tailwindcss'
import nesting from 'tailwindcss/nesting'
import config from '.'

const plugins = [
  postcssImport(),
  nesting(),
  tailwindcss({ config }),
  autoprefixer(),
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(cssnano())
}

export default {
  plugins,
}
