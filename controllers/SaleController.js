const SaleModel = require('../models/Sale');
const SaleProductModel = require('../models/SaleProduct.js');

const createSale = (req,res) => {
    //1. create a sale
    const iden = req.body.id;
    let productsList = [];
    SaleModel.createSale({"id":iden,"dni_cliente": req.body.dniCliente})
    .then((respuesta) => {
        saleId = respuesta[0].id;
        //Por como esta construida la base de datos no funcionara para muchos productos, ya que venta_producto esta construida para venta de solo un producto por como se definieron las primary keys. 
        //Para solucionarlo es necesario volver a hacer desde 0 las bases de datos.
        productsList = req.body.productos.map(producto => ({
            sku_producto: producto.idProducto,
            id_venta: parseInt(saleId),
            cantidad: producto.cantidad
        }));
        //2 crear un conjunto de productos asociados a una venta (venta_producto)
        return SaleProductModel.createSaleProductBatch(productsList);
    })
    .then((respuesta) => {
        return res.status(201).send({
            message: {
                venta: respuesta
            }
        });
    }).catch((error) => {
        return res.status(500).send({ message:"la kgaste en alguna info de la venta, "+error });
    });
    //2. create a group of associated products to a sale
     
};

module.exports = {
    createSale
}