// build your `/api/resources` router here


const express = require("express");
const router = express.Router();


const Resource = require("./model");


router.get("/", (req, res) => {
    Resource.getResources()
    .then((resources) => {
        res.json(resources);
    })
    .catch((error) => {
          res.status(500).json(error.message);
    });
});


router.post("/", (req, res) => {
  Resource.add(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((error) => {
      res.status(500).json(error.message);
    });
});


module.exports = router; 