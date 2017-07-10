import config from './rollup.config.dev.js';
import uglify from 'rollup-plugin-uglify';

config.dest = 'docs/honor.js';
config.plugins.push(uglify());
config.format = 'iife';

export default config;