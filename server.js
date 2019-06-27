const express = require("express");
const mongoose = require("mongoose");

const app = express();
// DB Config
// importing
const db = require("./config/keys.js").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(err => console.log({ err, error: "Couldnt Connect to Mongo DB" }));

app.get("/", (req, res) => {
  res.send("Server is Live!");
});

const port = process.env.PORT || 9000;

app.listen(port, () => console.log(`Port ${port} is live`));
