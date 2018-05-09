const express = require('express');

var Produto = require('.././models/produtoModel');
var produtoController = require('../controllers/produtoController')(Produto);

var produtoRouter = express.Router();

produtoRouter.route('')
    .get(produtoController.get)
    .post(produtoController.add);

produtoRouter.route('/:id')
    .get(produtoController.getById)
    .put(produtoController.update)
    .delete(produtoController.remove);

module.exports = produtoRouter;
