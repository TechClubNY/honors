import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

export default {
  dest: 'lib/index.js',
  entry: 'src/react/index.js',
  format: 'cjs',
  moduleName: 'techclub-honors',
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
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [['es2015', { modules: false }], 'stage-0', 'react'],
      plugins: ['external-helpers']
    }),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    })
  ],
  external: ['react', 'prop-types']
};