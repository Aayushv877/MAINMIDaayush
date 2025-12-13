const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

/*
  POST /tasks
  Create a new task
*/
router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/*
  GET /tasks
  Get all tasks
*/
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
