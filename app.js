const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/query", (req, res) => {
  const name = req.query.name || "Guest";
  res.send(`Hello, ${name}`);
});

app.get("/json", (req, res) => {
  res.json({ message: "This is a JSON response" });
});

app.use((req, res) => {
  res.status(404).send("Not Found");
});

module.exports = app;