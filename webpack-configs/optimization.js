const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  minimize: true,
  minimizer: [
    new CssMinimizerPlugin(), '...' // 压缩css 和 js
  ],
  splitChunks: {
    chunks: 'async',
    cacheGroups: {
      defaultVendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        reuseExistingChunk: true,
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    },
  },
};
