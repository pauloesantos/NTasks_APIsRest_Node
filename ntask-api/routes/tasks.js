const tasks = require("../models/tasks");

module.exports = app => {
    app.get("/taskd", (req, res) => {
        Tasks.findAll({}, (tasks) => {
            res.json({ tasks: tasks });
        });
    });
};