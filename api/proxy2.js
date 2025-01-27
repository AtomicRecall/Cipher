const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Enable CORS
app.use(cors());

// Proxy middleware to forward requests to https://api.faceit.com
app.use(
  "/",
  createProxyMiddleware({
    target: "https://api.faceit.com",
    changeOrigin: true, // Changes the origin of the host header to the target URL
    secure: true,       // Ensures HTTPS requests are handled securely
    pathRewrite: { "^/": "/" }, // Rewrites paths as necessary
  })
);

module.exports = app;