const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Insufficient values.!"],
    trim: true,
    maxLength: [25, "Too many characters.!"],
  },
  isCompleted: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", taskSchema);
