const express = require('express');

var produtoRouter = express.Router();

produtoRouter.route('')
    .get((req, res) => {
        res.send('Exibindo página de produtos');
    });

module.exports = produtoRouter;