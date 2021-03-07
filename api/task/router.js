const express = require("express");
const router = express.Router();


const Task = require("./model");


router.get("/", (req, res) => {
  Task.getTasks()
    .then((tasks) => {
      tasks.map((task) => {
        if (task.task_completed == 0) {
          task.task_completed = false;
        } else if (task.task_completed == 1) {
          task.task_completed = true;
        }
      });
      res.json(tasks);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});


router.post("/", (req, res) => {
  Task.add(req.body)
    .then((task) => {
      if (task.task_completed == 0) {
        task.task_completed = false;
      } else if (task.task_completed == 1) {
        task.task_completed = true;
      }
      res.status(201).json(task);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});


module.exports = router;