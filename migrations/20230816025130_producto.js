/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('producto').then((exists) => {
        if (!exists) {
            return knex.schema.createTable("producto", function (table) {
              table.string("sku").primary();
              table.string("name").notNullable();
              table.string("description").notNullable();
              table.float("price").notNullable();
            });
          }
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};