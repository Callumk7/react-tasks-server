"use strict";
exports.__esModule = true;
var express = require("express");
var cors = require("cors");
var tasks_1 = require("./routes/tasks");
var projects_1 = require("./routes/projects");
var app = express();
// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(function (req, res, next) {
    console.log("".concat(req.method, " ").concat(req.path));
    next();
});
// Routes
app.use("/tasks", tasks_1.tasksRouter);
app.use("/projects", projects_1.projectsRouter);
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
