const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const commonsChunkConfig = require('@zeit/next-css/commons-chunk-config');

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

module.exports = withSass(withCSS({
  webpack: config => commonsChunkConfig(config, /\.(sass|scss|css)$/)
}));
