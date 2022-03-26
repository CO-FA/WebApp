const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    'app/',
    createProxyMiddleware({
      //target: 'https://sandbox.sbsoftware.net/',
      target:"https://ipinfo.io/",
      changeOrigin: true,
    })
  );
};