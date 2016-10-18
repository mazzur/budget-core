import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';

export default {
  entry: 'src/index.js',
  dest: 'dist/bundle.js',
  format: 'iife',
  sourceMap: 'inline',

  plugins: [
    eslint( { exclude: ['dist/**', 'node_modules/**'] } ),
    babel( { exclude: 'node_modules/**' } )
  ]
}