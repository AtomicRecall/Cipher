import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";
import { URL } from "url"; // Import URL module for proper query handling

const app = express();
app.use(cors());

app.use(
  "/api/proxy2",
  proxy("https://api.faceit.com", {
    proxyReqPathResolver: (req) => {
      const originalPath = req.query.endpoint || "";
      const fullUrl = new URL(req.originalUrl, `http://${req.headers.host}`);
      const queryString = fullUrl.searchParams.toString(); // Preserve full query string

      const endpoint = req.query.endpoint || '';
      const apiUrl = `https://api.faceit.com/${endpoint}`;
      console.log(`Proxying request to: ${apiUrl}`);

      return `${endpoint}`;
    },
    proxyReqOptDecorator: (proxyReqOpts) => {
      proxyReqOpts.headers["Authorization"] = `Bearer 1df284f3-de17-4d2e-b8c7-5a460265e05a`;
      return proxyReqOpts;
    }
  })
);

export default app;