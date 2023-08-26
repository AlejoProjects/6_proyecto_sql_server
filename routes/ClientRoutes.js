const express = require('express');

const router = express.Router();//yo le digo a donde va a ir, redireccionar el contenido
const {ClientController} = require('../controllers');

//crear
router.post('/',ClientController.createClient);
//leer
router.get('/', ClientController.getAllClients);
router.get('/:id',ClientController.getClient);
//actualizar
router.put('/:id', (req,res) => res.send({message: " Se sustituyp"}));
router.patch('/:id', (req,res) => res.send({message: " Se modificó"}));

//delete
router.delete('/', (req,res) => res.send({message: " Se borró"}));



module.exports = router;
