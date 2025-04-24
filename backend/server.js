const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const STRAVA_CLIENT_ID = '156869';
const STRAVA_CLIENT_SECRET = 'ce5c6b77138325a977347c896583711713ce43c2';

app.post('/exchange_token', async (req, res) => {
  const { code } = req.body;
  console.log("📥 Received code from frontend:", code);

  try {
    const response = await axios.post('https://www.strava.com/oauth/token', {
      client_id: STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      code: code,
      grant_type: 'authorization_code'
    });

    console.log("✅ Token exchanged:", response.data);
    res.json(response.data);
  } catch (error) {
    console.error('❌ Token exchange failed:', error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || 'Token exchange failed' });
  }
});

app.post('/get_activities', async (req, res) => {
  const { access_token } = req.body;
  console.log("📤 Fetching activities with access token:", access_token.slice(0, 6) + '...');

  try {
    const response = await axios.get('https://www.strava.com/api/v3/athlete/activities', {
      headers: {
        Authorization: `Bearer ${access_token}`
      },
      params: {
        per_page: 5,
        page: 1
      }
    });

    console.log("📊 Activities fetched:", response.data.length);
    res.json(response.data);
  } catch (error) {
    console.error("❌ Failed to fetch activities:", error.response?.data || error.message);
    res.status(500).json({ error: error.response?.data || "Fetch failed" });
  }
});

app.listen(5000, () => {
  console.log("✅ Backend server running on http://localhost:5000");
});
