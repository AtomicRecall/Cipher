// api/faceitProxy.js
import axios from 'axios';
export default async function handler(req, res) {
  const endpoint = req.query.endpoint || ''; 
  const apiUrl = `https://api.faceit.com/${endpoint}`;
  console.log(apiUrl);

  try {
    const response = await axios.get(apiUrl);
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.status(200).json(response.data); 
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(error.response?.status || 500).json({ error: "Error fetching data from Faceit API" });
  }
}