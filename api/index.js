const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Webhook aktif"
  });
});

app.post("/webhook", (req, res) => {
  console.log(req.body);

  res.json({
    success: true
  });
});

module.exports = app;