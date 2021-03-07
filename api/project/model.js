// build your `Project` model here

const db = require("../../data/dbConfig");


const getProjects = () => {
    return db("projects");
}


const add = (project) =>  {
  return db("projects")
    .insert(project)
    .then(([id]) => {
      return db("projects").where("id", id).first();
  });
}


module.exports = {
  add, 
  getProjects
}
