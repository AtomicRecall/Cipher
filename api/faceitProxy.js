// api/faceitProxy.js
import axios from 'axios';
export default async function handler(req, res) {
  const endpoint = req.url || ''; // Grab the endpoint from the query
  console.log("WHAT THE FUCK "+req.url);
  let url = (endpoint).substring(26);
        console.log("URL BEFORE DECODING: "+url);
        url = decodeURIComponent(url);
        url = url.replace("&","?");
  const apiUrl = `https://api.faceit.com/championships/v1/matches${url}`;

  console.log("Requesting data from:", apiUrl); // Debug log to verify the URL

  try {
    const response = await axios.get(apiUrl);
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    console.log("Data received:", response.data); // Log the received data

    res.status(200).json(response.data); // Send back the data
    return response.data;

  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(error.response?.status || 500).json({ error: "Error fetching data from Faceit API" });
  }
}