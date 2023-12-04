const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    lowercase: true,
    required: true,
  },
  status: {
    type: String,
  },

  date: {
    type: String,
    lowercase: true,
    required: true,
  },
});

module.exports = mongoose.model("categories", taskSchema);
