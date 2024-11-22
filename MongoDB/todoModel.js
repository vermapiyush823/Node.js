const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  todo: { type: String, required: true },
});

const model = mongoose.model("ToDoModel", ToDoSchema);

module.exports = model;
