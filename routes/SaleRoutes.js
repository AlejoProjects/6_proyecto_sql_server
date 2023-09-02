const express = require('express');
const { SaleController } = require('../controllers');

const router = express.Router();




//crear
router.post('/', SaleController.createSale);
//leer

//actualizar
router.put('/:id', (req,res) => res.send({message: " Se sustituyp"}));

router.patch('/:id', (req,res) => res.send({message: " Se modificó"}));

//delete
router.delete('/', (req,res) => res.send({message: " Se borró"}));
module.exports = router;