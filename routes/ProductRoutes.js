const express = require('express');

const router = express.Router();//yo le digo a donde va a ir, redireccionar el contenido
const {ProductController} = require('../controllers');

//crear
router.post('/', ProductController.createProduct);
//leer
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProduct);
//actualizar
router.put('/:id', (req,res) => res.send({message: " Se sustituyo"}));
router.patch('/:id', (req,res) => res.send({message: " Se modificó"}));

//delete
router.delete('/', (req,res) => res.send({message: " Se borró"}));


module.exports = router;