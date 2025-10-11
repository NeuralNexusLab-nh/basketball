const express = require("express");
const path = require("path");
const app = express();

app.set("trust proxy", true);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});

app.get("/cdn/:fn", (req, res) => {
  res.sendFile(path.join(__dirname, "cdn", req.params.fn));
});

app.listen(process.env.PORT);
