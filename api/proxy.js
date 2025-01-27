import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    // Handle CORS preflight requests
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Access-Control-Max-Age", "86400");
    return res.status(200).end();
  }

  const endpoint = req.query.endpoint || '';
  const apiUrl = `https://api.faceit.com/${endpoint}`;
  console.log("Proxying request to:", apiUrl);

  try {
    const FACEIT_API_TOKEN = process.env.FACEIT_API_TOKEN;
    if (!FACEIT_API_TOKEN) {
      throw new Error("FACEIT_API_TOKEN is not set.");
    }

    const response = await axios({
      url: apiUrl,
      method: req.method,
      headers: {
        Authorization: `Bearer 1df284f3-de17-4d2e-b8c7-5a460265e05a`,
        'Content-Type': 'application/json',
        ...req.headers, // Include incoming headers if needed
      },
      data: req.body, // Pass body for POST/PUT requests
    });

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error fetching data from Faceit API:");
    console.error({
      message: error.message,
      config: error.config,
      response: error.response?.data,
      status: error.response?.status,
    });

    res.status(error.response?.status || 500).json({
      error: "Error fetching data from Faceit API",
      details: error.response?.data || error.message,
    });
  }
}