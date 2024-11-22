const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  const name = req.query;
  console.log("Hello");
  res.sendFile("./public/index.html");
});
app.get("/:name", (req, res) => {
  const name = req.params;
  console.log("Hello");
  res.json({
    message: "ok",
    name: name.name,
  });
});
app.post("/", (req, res) => {
  const name = req.body.name;
  if (name != null) {
    res.json({
      name: name,
    });
  } else {
    res.status(300).json({
      error: 404,
    });
  }
});

app.listen(3000, console.log("Listening on  port 3000"));
