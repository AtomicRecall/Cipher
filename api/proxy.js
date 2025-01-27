import https from 'https';
import axios from 'axios';

const agent = new https.Agent({
  secureProtocol: 'TLSv1_2_method', // Force TLS 1.2
  ciphers: 'ECDHE-RSA-AES256-GCM-SHA384:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA',

});

export default async function handler(req, res) {
  const endpoint = req.query.endpoint || '';
  const apiUrl = `https://api.faceit.com/${endpoint}`;

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

    res.setHeader("Access-Control-Allow-Origin", "*");
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