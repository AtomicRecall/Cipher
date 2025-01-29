import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";

const app = express();
app.use(cors());

app.use(
  "/api/proxy2", // Only match this route
  proxy("https://api.faceit.com", {
    proxyReqPathResolver: (req) => {
      const originalPath = req.query.endpoint || ""; // Get the correct API path
      console.log(`Proxying request to: https://api.faceit.com/${originalPath}`);
      return `/${originalPath}`;
    },
    proxyReqOptDecorator: (proxyReqOpts, srcReq) => {
      proxyReqOpts.headers["Authorization"] = `Bearer 1df284f3-de17-4d2e-b8c7-5a460265e05a`;
      console.log("Headers being sent:", proxyReqOpts.headers);
      return proxyReqOpts;
    }
  })
);

export default app;