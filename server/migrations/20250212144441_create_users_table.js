//TODO - need to fix migration
exports.up = function (knex) {
    return knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
      .then(() => {
        return knex.schema.createTable("users", function (table) {
          table.uuid("id").primary().defaultTo(knex.raw("uuid_generate_v4()"));
          table.string("username").notNullable().unique();
          table.string("email").notNullable().unique();
          table.string("password").notNullable();
          table.timestamp("created_at").defaultTo(knex.fn.now());
        });
      });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("users")
      .then(() => knex.raw('DROP EXTENSION IF EXISTS "uuid-ossp"'));
  };
  