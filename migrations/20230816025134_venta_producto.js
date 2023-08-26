/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    if(!exists){
  return knex.schema.hasTable('venta_producto').then((exists)=> {
        table.integer("sku_producto").primary();
        table.integer("id_venta").primary();
        table.float("cantidad").notNUllable();
        table.foreign("sku_producto").references("producto.sku");
        table.foreign("id_venta").references("venta.id");
  });
}
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */