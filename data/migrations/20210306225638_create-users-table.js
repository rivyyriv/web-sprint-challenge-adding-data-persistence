exports.up = function (knex) {


    return knex.schema


      .createTable("projects", (table) => {
        table.increments("id");
        table.string("project_name", 128).notNullable();
        table.string("project_description", 128);
        table.boolean("project_completed").notNullable().defaultTo(false);
      })

      
      .createTable("resources", (table) => {
        table.increments("id");
        table.string("resource_name", 128).unique().notNullable();
        table.string("resource_description", 128);
      })

      
      .createTable("tasks", (table) => {
        table.increments("id");
        table.string("task_description", 128).notNullable();
        table.string("task_notes", 128);
        table.boolean("task_completed").notNullable().defaultTo(false);
        table
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("RESTRICT");
      })


      .createTable("project_resources", (table) => {
        table.increments("id");
        table
          .integer("project_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("projects")
          .onDelete("RESTRICT")
          .onUpdate("RESTRICT");
        table
          .integer("resource_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("resources")
          .onDelete("RESTRICT")
          .onUpdate("RESTRICT");
      });
};
  

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};