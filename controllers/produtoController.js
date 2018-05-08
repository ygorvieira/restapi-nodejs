var Produto = require('../models/produtoModel');

var get = ((req, res) => {
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
});

module.exports = get;