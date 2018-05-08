const express = require('express');

var produtoRouter = express.Router();
var produtoController = require('../controllers/produtoController');

produtoRouter.route('')
    .get(produtoController);

module.exports = produtoRouter;
