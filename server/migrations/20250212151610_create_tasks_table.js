exports.up = function (knex) {
    return knex.schema.createTable("tasks", function (table) {
      table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
      table.string("title").notNullable();
      table.integer("order").notNullable().defaultTo(0);
      table.boolean("completed").notNullable().defaultTo(false);
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.timestamp("updated_at").defaultTo(knex.fn.now());
      table.uuid("user_id").notNullable().references("id").inTable("users").onDelete("CASCADE");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("tasks");
  };
  