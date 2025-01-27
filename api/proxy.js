// api/faceitProxy.js
import axios from 'axios';

export default async function handler(req, res) {
  // Extract the full endpoint from the query
  const endpoint = req.query.endpoint || '';
  
  // Construct the full API URL dynamically
  const apiUrl = `https://api.faceit.com/${endpoint}`;
  console.log(`Proxying request to: ${apiUrl}`); // For debugging
  
  try {
    // Make the API request
    const response = await axios({
      url: apiUrl,
      method: req.method,
      headers: req.headers,
      data: req.body, // Pass body for POST/PUT requests
    });

    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader('Access-Control-Max-Age', '86400');
    res.status(200).end();

    // Return the API response
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);

    // Handle errors and return a meaningful response
    res.status(error.response?.status || 500).json({
      error: "Error fetching data from Faceit API",
      details: error.response?.data || error.message,
    });
  }
}