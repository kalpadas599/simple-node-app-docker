const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, "public")));

// Handle form submission
app.post("/save", (req, res) => {
  const name = req.body.name;
  fs.appendFileSync("names.txt", name + "\n");
  res.send(`<h2>Saved: ${name}</h2><a href="/">Go Back</a>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
