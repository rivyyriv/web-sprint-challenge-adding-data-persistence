exports.seed = function(knex){

  return knex('tasks').del()

      .then(() => {
          return knex('tasks').insert([

            {
              task_description:'you gotta do it',
              task_notes:'notes on doin it here',
              task_completed:false, 
              project_id:1
            },

            {
              task_description:'you also gotta do this',
              task_notes:'notes to do this here', 
              task_completed:false,
              project_id:2
            }
      ])
  })
} 