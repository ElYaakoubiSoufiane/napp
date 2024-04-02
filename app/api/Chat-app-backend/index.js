// require("dotenv").config();

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/signupChat", async (req, res) => {
  const { username, secret, email } = req.body;

  try {
    const r = await axios.post(
      "https://api.chatengine.io/users/",
      { username, secret, email },
      { headers: { "Private-Key": "655b2459-6f5c-4a0f-894a-91c7c093444c" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.post("/login", async (req, res) => {
  const { username, secret } = req.body;

  // console.log("Fetch user from DB.");
  // return res.json({ user: {} });

  // Fetch this user from Chat Engine in this project!
  try {
    const r = await axios.get("https://api.chatengine.io/users/me/", {
      headers: {
        "Project-ID": "8e31bff0-d614-490e-a48a-7c649755ff83",
        "User-Name": username,
        "User-Secret": secret,
      },
    });
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

// Docs at rest.chatengine.io
// vvv On port 3001!
app.listen(3001, console.log("app on port 3001"));
