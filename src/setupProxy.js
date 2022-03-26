const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/*',
    createProxyMiddleware({
      target: 'https://sandbox.sbsoftware.net/',
      changeOrigin: true,
    })
  );
};