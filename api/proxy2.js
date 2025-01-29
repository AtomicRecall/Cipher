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
      proxyReqOpts.headers["Authorization"] = `Bearer ${process.env.FACEIT_API_TOKEN}`;
      console.log("Headers being sent:", proxyReqOpts.headers);
      return proxyReqOpts;
    }
  })
);

export default app;