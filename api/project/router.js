// build your `/api/projects` router here

const express = require("express");
const router = express.Router();


const Project = require("./model");


router.get("/", (req, res) => {
    Project.getProjects()
    .then((projects) => {
        projects.map((project) => {
            if (project.project_completed == 0) {
                project.project_completed = false;
            } else if (project.project_completed == 1) {
                project.project_completed = true;
            }
        });
        res.json(projects);
    })
    .catch((error) => {
        res.status(500).json(error.message);
    });
});


router.post("/", (req, res) => {
  Project.add(req.body)
    .then((project) => {
      if (project.project_completed == 0) {
        project.project_completed = false;
      } else if (project.project_completed == 1) {
        project.project_completed = true;
      }
      res.status(201).json(project);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});


module.exports = router;