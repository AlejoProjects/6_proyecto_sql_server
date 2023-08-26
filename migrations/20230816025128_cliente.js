/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    if(!exists){
  return knex.schema.hasTable('cliente').then((exists)=> {
        table.increments("dni").primary();
        table.string("nombre").notNUllable();
        table.string("primer_apellido").notNUllable();
        table.boolean("active").notNUllable().defaultTo(true);
        table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

};