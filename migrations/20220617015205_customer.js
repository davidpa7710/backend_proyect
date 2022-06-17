/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.hasTable("customer").then(function(exists){
      if (!exists) {
          return knex.schema.createTable("customer", function(table){
              table.increments("customer_id").primary()
              table.string("first_name").notNullable()
              table.string("last_name").notNullable()
              table.string("email").notNullable().unique()
              table.timestamp('created_at').defaultTo(knex.fn.now())
          })
      }
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.hasTable("customer").then(function(exists){
      if (exists) {
          return knex.schema.dropTable("customer")
      }
  })
};
