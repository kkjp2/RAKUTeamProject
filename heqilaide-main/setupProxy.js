const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware({
            target: 'http://localhost:8080',  // 后端服务器地址
            changeOrigin: true,
        })
    );
};
