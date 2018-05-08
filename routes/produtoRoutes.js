const express = require('express');

var Produto = require('.././models/produtoModel');
var produtoController = require('../controllers/produtoController');

var produtoRouter = express.Router();

produtoRouter.route('')
    .get(produtoController.get)
    .post(produtoController.add);

produtoRouter.route('/:id')
    .get(produtoController.getById);

module.exports = produtoRouter;
