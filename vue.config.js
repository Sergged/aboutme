/* eslint-disable */
// on-hold https://github.com/vuejs/vue-cli/issues/2978
module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'development') {
      config.devtool = 'eval-source-map';
      config.output.devtoolModuleFilenameTemplate = info => {
        return info.resourcePath.match(/\.vue$/) && !info.identifier.match(/type=script/)  // this is change ✨
          ? `webpack-generated:///${info.resourcePath}?${info.hash}`
          : `webpack-yourCode:///${info.resourcePath}`;
      }

      config.output.devtoolFallbackModuleFilenameTemplate = 'webpack:///[resource-path]?[hash]';
    }
  }
}
