import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';

export default {
  entry: 'src/index.js',
  format: 'cjs',
  plugins: [
    postcss({
      plugins: [
        cssnano()
      ],
      //sourceMap: false, // default value
      //extract: false, // default value
      extensions: ['.css', '.sss']  // default value
      // parser: sugarss
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  dest: 'docs/bundle.js'
};