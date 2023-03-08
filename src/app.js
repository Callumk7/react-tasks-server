"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var tasks_1 = require("./routes/tasks");
var projects_1 = require("./routes/projects");
var app = (0, express_1["default"])();
// Middleware
app.use((0, cors_1["default"])());
app.use(express_1["default"].json()); // for parsing application/json
app.use(function (req, res, next) {
    console.log("".concat(req.method, " ").concat(req.path));
    next();
});
// Routes
app.use('/tasks', tasks_1.tasksRouter);
app.use('/projects', projects_1.projectsRouter);
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
