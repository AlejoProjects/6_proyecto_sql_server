const express = require('express');

const router = express.Router();

const { SaleController } = require('../controllers');


//crear
router.post('/', SaleController.createSale);
//leer
router.get('/', );
router.get('/:id',);
//actualizar
router.put('/:id', (req,res) => res.send({message: " Se sustituyp"}));
router.patch('/:id', (req,res) => res.send({message: " Se modificó"}));

//delete
router.delete('/', (req,res) => res.send({message: " Se borró"}));
const clients = require('./');


module.exports = router;