const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const taskRoutes = require("./routes/taskRoutes"); // 👈 ADD THIS

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// API routes
app.use("/tasks", taskRoutes); // 👈 ADD THIS

mongoose
  .connect("mongodb://mongo:27017/taskdb")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
