const mongoose = require("mongoose");

/*
  Task Schema
  This defines how a task looks in MongoDB
*/
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String
    },

    completed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

/*
  Create Model
*/
module.exports = mongoose.model("Task", taskSchema);
