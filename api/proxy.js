import https from 'https';
import axios from 'axios';

const agent = new https.Agent({
  rejectUnauthorized: true, // Ensure the certificate is valid
  secureProtocol: 'TLS_method', // Try with the latest supported TLS protocol

});


export default async function handler(req, res) {
  const endpoint = req.query.endpoint || '';
  let url = (req.url).substring(20);
        console.log("URL BEFORE DECODING: "+url);
        url = decodeURIComponent(url);
        url = url.replace("&","?");
  const apiUrl = `https://api.faceit.com/championships/v1/matches${url}`;
  console.log("RUNNING "+apiUrl);
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const response = await axios({
      url: apiUrl,
      method: req.method,
      headers: {
        Authorization: `Bearer 1df284f3-de17-4d2e-b8c7-5a460265e05a`,
        ...req.headers,
      },
      data: req.body,
      httpsAgent: agent, // Use the custom agent
    });

   
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      config: error.config,
      response: error.response?.data,
    });

    res.status(error.response?.status || 500).json({
      error: "Error fetching data from Faceit API",
      details: error.response?.data || error.message,
    });
  }
}