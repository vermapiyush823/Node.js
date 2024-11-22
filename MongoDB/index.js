const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const todoModel = require("./todoModel");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://vermapiyush823:NXAAO5FEY9KH77TM@cluster0.a1cgt.mongodb.net"
    );
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}
connectDB();

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./public/index.html"));
});

app.post("/api/post", async (req, res) => {
  const todo = req.body;
  await todoModel.create(todo);
  res.json({ message: "ok" });
});

app.listen(3000, () => console.log("Server started on port 3000"));
