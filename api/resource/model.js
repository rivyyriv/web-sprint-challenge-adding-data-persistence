// build your `Resource` model here


const db = require("../../data/dbConfig");


const getResources = () => {
  return db("resources");
}


const add = (resource) => {
  return db("resources")
    .insert(resource)
    .then(([id]) => {
      return db("resources").where("id", id).first();
  });
}


module.exports = {
  getResources,
  add, 
} 