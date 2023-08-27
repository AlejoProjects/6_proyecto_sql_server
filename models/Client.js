const connection = require("../knexfile")['development'];

const database = require('knex')(connection);


 const createClient = (client) => {
    return database('cliente')
    .insert(client);
 };
 const getClient = (client) => {
   console.log('cliente',client)
   return database('cliente')
   .where({dni:client})
   .then((respuesta) => {
      return respuesta.message[0];
   });
};
/*Or const getOneClient = (id) => {
   return database.select('*').from('cliente').where('dni',id);
} */
const getAllClients = (client) => {
   return database.select('*').from('cliente');
};


 module.exports = {
    createClient,
    getClient,
    getAllClients
 };