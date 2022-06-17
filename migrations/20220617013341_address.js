/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable("address").then(function (exists) {
        if (!exists) {
            return knex.schema.createTable("address", function (table) {
                table.increments("address_id").primary()
                table.text('address').notNullable()
                table.string("disctrict")
                table.string("postal_code").notNullable()
                table.string("phone").notNullable().unique()
                table.string("city")
                table.timestamp('created_at').defaultTo(knex.fn.now())
            })
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.hasTable("address").then(function(exists){
        if (exists) {
            return knex.schema.dropTable("address")
        }
    })
};
