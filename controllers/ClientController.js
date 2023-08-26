const ClientModel = require('../models/Client');

const createClient = (req, res) => {
    ClientModel.createClient(req.body)
    .then((respuesta) => {
        return res.status(201).send({ message: respuesta })
    })
    .catch((error) => {
        return res.status(500).send({ message:"la kgaste "+error })
    });
};


module.exports = {
    createClient
}