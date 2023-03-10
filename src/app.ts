import express = require("express");
import cors = require("cors");
import { tasksRouter } from "./routes/tasks";
import { projectsRouter } from "./routes/projects";

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Routes
app.use("/tasks", tasksRouter);
app.use("/projects", projectsRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
