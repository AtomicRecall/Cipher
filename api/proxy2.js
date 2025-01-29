import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";

const app = express();
app.use(cors());

app.use("/", (req, res, next) => {
    console.dir(req);
  console.log(`Incoming request: ${req.url}`);
  next();
});

app.use(
  "/",
  proxy("https://api.faceit.com/championships/v1/matches", {
    proxyReqPathResolver: (req) => {
        let url = (req.url).substring(21);
        console.log("URL BEFORE DECODING: "+url);
        url = decodeURIComponent(url);
        url = url.replace("&","?");
      console.log(`Proxying request to: https://api.faceit.com/championships/v1/matches/${url}`);
      return url;
    },
    proxyReqOptDecorator: (proxyReqOpts) => {
      proxyReqOpts.headers["Authorization"] = `Bearer 1df284f3-de17-4d2e-b8c7-5a460265e05a`;
      return proxyReqOpts;
    },
    userResDecorator: (proxyRes, proxyResData, req, res) => {
      try {
        const data = proxyResData;
        console.log("Response from Faceit API:", data);
        return JSON.stringify(data);
      } catch (error) {
        console.error("Error parsing response:", error);
        return proxyResData;
      }
    },
  })
);

app.use((req, res) => {
  console.log("No matching route found:", req.url);
  res.status(404).json({ error: "Not found" });
});

export default app;