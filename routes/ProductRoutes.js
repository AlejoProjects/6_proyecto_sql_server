const express = require('express');

const router = express.Router();//yo le digo a donde va a ir, redireccionar el contenido

//crear
router.post('/', (req,res) => res.send({message: " Se creó"}));
//leer
router.get('/', (req,res) => res.send({message: " Se leen todos"}));
router.get('/:id', (req,res) => res.send({message: " Se leen uno"}));
//actualizar
router.put('/:id', (req,res) => res.send({message: " Se sustituyo"}));
router.patch('/:id', (req,res) => res.send({message: " Se modificó"}));

//delete
router.delete('/', (req,res) => res.send({message: " Se borró"}));
const clients = require('.');


module.exports = router;