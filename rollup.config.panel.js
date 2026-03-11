import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import { minify } from 'rollup-plugin-esbuild-minify';

export default {
  input: 'panel-src/main.ts',
  output: {
    file: 'custom_components/upkeep/panel/dist/main.js',
    format: 'es',
    inlineDynamicImports: true,
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript(),
    minify(),
  ],
  onwarn(warning, warn) {
    if (warning.code === 'THIS_IS_UNDEFINED' && warning.id?.includes('/node_modules/')) return;
    warn(warning);
  },
};
