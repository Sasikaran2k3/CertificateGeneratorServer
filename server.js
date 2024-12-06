// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.static('public')); // Serve static files (HTML, CSS, JS)
app.get('/firebase-config', (req, res) => {
  // Create config object
  const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN, 
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  };

  // Basic encryption using Base64
  const encryptedConfig = Buffer.from(JSON.stringify(config)).toString('base64');

  res.json({
    data: encryptedConfig
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
