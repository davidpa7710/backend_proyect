/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable("customer").then(function (exists) {
        if (exists) {
            return knex.schema.table("customer", function (table) {
                table.integer("fk_address").unsigned().references("address.address_id")
            })
        }
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.hasTable("customer").then(function (exists) {
        if (exists) {
            return knex.schema.table("customer", function (table) {
                table.dropColumn("fk_address")
            })
        }
    });
};
