// api/faceitProxy.js
import axios from 'axios';

export default async function handler(req, res) {
  const endpoint = req.query.endpoint || ''; // Specify any sub-endpoints as needed
  const apiUrl = `https://api.faceit.com/democracy/v1/${endpoint}`;

  try {
    const response = await axios.get(apiUrl);
    res.setHeader("Access-Control-Allow-Origin", "*"); // Enable CORS for all origins
    res.status(200).json(response.data); // Send back the data
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(error.response?.status || 500).json({ error: "Error fetching data from Faceit API" });
  }
}