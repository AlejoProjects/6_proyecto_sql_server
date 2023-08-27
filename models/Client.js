const connection = require("../knexfile")['development'];

const database = require('knex')(connection);


 const createClient = (client) => {
    return database('cliente')
    .insert(client);
 };
 const getClient = (client) => {
   console.log('cliente',client)
   return database('cliente')
   .where({dni:client});
};
const getAllClients = (client) => {
   return database('cliente');
};


 module.exports = {
    createClient,
    getClient,
    getAllClients
 };