module.exports = {
  dev: {
    host: '0.0.0.0',
    port: 10012,
    hot: true,
    open: false,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    proxy: {
      '/api': {
        // logLevel: 'debug',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        target: 'http://30.168.123.79',
      },
    },
  }
};
