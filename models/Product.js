const connection = require("../knexfile")['development'];

const database = require('knex')(connection);


 const createProduct = (product) => {
    return database('producto')
    .insert(product);
 };

 const getProduct = (product) => {
   console.log('producto',product)
   return database('producto')
   .where({sku:product});
};
const getAllProducts = (producto) => {
   return database.select('*').from('producto');
};


 module.exports = {
    createProduct,
    getProduct,
    getAllProducts
 };