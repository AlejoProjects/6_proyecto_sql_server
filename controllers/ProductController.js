const ProductModel = require('../models/Product.js');

const createProduct = (req, res) => {
    ProductModel.createProduct(req.body)
    .then((respuesta) => {
        return res.status(201).send({ message: respuesta });
    })
    .catch((error) => {
        return res.status(500).send({ message:"la kgaste en productos, "+error });
    });
};
const getProduct = (req, res) => {
    ProductModel.getProduct(req.params.id)
    .then((respuesta) => {
        return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
        return res.status(500).send({ message:"la kgaste "+error })
    });
};
const getAllProducts = (req, res) => {
    ProductModel.getAllProducts()
    .then((respuesta) => {
        return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
        return res.status(500).send({ message:"la kgaste en productos, "+error })
    });
};
module.exports = {
    createProduct,
    getProduct,
    getAllProducts
}