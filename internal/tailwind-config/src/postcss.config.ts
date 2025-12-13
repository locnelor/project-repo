import config from ".";
import autoprefixer from "autoprefixer";
import postcssImport from "postcss-import";
import tailwindcss from "tailwindcss";
import nesting from "tailwindcss/nesting";
import cssnano from "cssnano";

const plugins = [
  postcssImport(),
  nesting(),
  tailwindcss({ config }),
  autoprefixer(),
];

if (process.env.NODE_ENV === "production") {
  plugins.push(cssnano());
}

export default {
  plugins,
};
