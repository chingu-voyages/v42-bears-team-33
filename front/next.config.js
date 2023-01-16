const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  lessVarsFilePath: './styles/variables.less',
  lessVarsFilePathAppendToEndOfContent: true,
  cssLoaderOptions: {},

  webpack(config) {
    return config;
  },
});
