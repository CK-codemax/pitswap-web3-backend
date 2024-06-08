const { createProxyMiddleware } = require("http-proxy-middleware");

exports.proxyMiddleware = createProxyMiddleware({
    target: "https://api.1inch.dev",
    changeOrigin: true,
    onProxyReq: (proxyReq) => {
      // add API key in Header
      proxyReq.setHeader("Authorization", `Bearer ${process.env.ONE_INCH_KEY}`);
    },
  });

  exports.sayHello = async (req, res, next) => {
    res.status(200).json({
      status: 'success',
      message: 'welcome'
    });
  }

