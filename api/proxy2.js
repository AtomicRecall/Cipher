import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";

const app = express();

// Enable CORS
app.use(cors());

// Proxy all requests to the Faceit API
app.use("/", proxy("https://api.faceit.com", {
  proxyReqPathResolver: (req) => req.url, // Ensures the request path is forwarded correctly
  proxyReqOptDecorator: (proxyReqOpts) => {
    return proxyReqOpts;
  }
}));

export default app;