const express = require("express");
const http = require("http");
const app = express();
const bodyParser = require("body-parser");
const socket = require("socket.io");
const path = require("path");
const server = app.listen(3000, console.log("server started on port 3000"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve("./public")));
app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});

const io = socket(server);

io.on("connection", (socket) => {
  var mesg;
  socket.on("message", (msg) => {
    mesg = msg;
    io.emit("reply", msg);

    console.log(msg);
  });
  if (mesg) {
  }
});
