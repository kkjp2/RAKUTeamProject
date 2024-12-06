const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
      allowedHosts: ['localhost'], // 强制设置 allowedHosts
    })
  );
};
