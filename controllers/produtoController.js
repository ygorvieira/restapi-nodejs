var Produto = require('../models/produtoModel');

var get = (req, res) => {
    Produto.find((err, produtos) => {
        if(err)
        {
            res.status(500);
            res.send('Erro de servidor!');
        }
        else
        {
            res.status(200);
            res.send(produtos);
        }
    });
};

var getById = (req, res) => {
    Produto.findById(req.params.id, (err, produto) => {
        if(err)
        {
            res.status(404);
            res.send("Produto não encontrado");
        }
        else
        {
            res.status(200);
            res.send(produto);
        }
    });
};

var add = (req, res) => {
    var produto = new Produto(req.body);

    produto.save((err) => {
        if(err)
        {
            res.status(500);
            res.send('Falha ao cadastrar produto');
        }
        else
        {
            res.status(201);
            res.send(produto);
        }
    });
};

module.exports = {
    add: add,
    get: get,
    getById: getById
};