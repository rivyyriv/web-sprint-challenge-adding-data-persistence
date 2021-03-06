exports.seed = function(knex){

  return knex('resources').del()
  
  .then(() => {
      return knex('resources').insert([
        
        {
          resource_name:"foo",
          resource_description:null
        },

        {
          resource_name: 'stack overflow', 
          resource_description: 'coding resource' 
        },

        {
          resource_name: 'youtube', 
          resource_description: 'where you can find videos on pretty much anything'
        }
      ])
  })
}
