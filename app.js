const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("views", "ejs");

app.get("/", (req, res) => res.send("Hello World"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express App on ${PORT}`));