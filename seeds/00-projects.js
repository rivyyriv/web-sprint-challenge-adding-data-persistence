exports.seed = function (knex) { 

  return knex('projects').del()
  
  .then(() => {
      return knex('projects').insert([

          { 
            project_name: 'Web API', 
            project_description: 'Build APIs',
            project_completed:0
          },

          {
            project_name: 'Databases', 
            project_description: 'Learn SQL', 
            project_completed: 1
          },
          {
            project_name: 'Project Three', 
            project_description: 'test', 
            project_completed: 0,
          },
      ])
  })
}