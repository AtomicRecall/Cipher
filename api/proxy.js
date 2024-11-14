// api/faceitProxy.js
import axios from 'axios';
export default async function handler(req, res) {
  const endpoint = req.query.endpoint || ''; // Grab the endpoint from the query
  const apiUrl = `https://api.faceit.com/democracy/v1/${endpoint}`;

  console.log("Requesting data from:", apiUrl); // Debug log to verify the URL

  try {
    const response = await axios.get(apiUrl);
    console.log("Data received:", response.data); // Log the received data
    res.setHeader("Access-Control-Allow-Origin", "*"); // Enable CORS
    res.status(200).json(response.data); // Send back the data
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(error.response?.status || 500).json({ error: "Error fetching data from Faceit API" });
  }
}