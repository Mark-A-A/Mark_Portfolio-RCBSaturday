require('dotenv').config();

import express from "express";

const PORT = process.env.PORT || 1738;

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now listening on port ${PORT}!`);
});