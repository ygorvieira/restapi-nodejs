var produtoController = (Produto) => {

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

    var update = (req, res) => {
        Produto.findById(req.params.id, (err, produto) => {
            if(err)
            {
                res.status(404);
                res.send('Produto não localizado');
            }
            else
            {
                produto.nome = req.body.nome;
                produto.descricao = req.body.descricao;
                produto.preco = req.body.preco;
                produto.estoque = req.body.estoque;
                produto.ativo = req.body.ativo;

                produto.save((err) => {
                    if(err)
                    {
                        res.status(500);
                        res.send('Falha ao atualizar');
                    }
                    else
                    {
                        res.status(200);
                        res.send(produto);
                    }
                });
            }
        });
    }

    var remove = (req, res) => {
        Produto.findById(req.params.id, (err, produto) => {
            produto.remove((err) => {
                if(!err)
                {
                    res.status(204);
                    res.send('Produto removido com sucesso');
                }
            });
        });
    }

    return {
        add: add,
        get: get,
        getById: getById,
        update: update,
        remove: remove
    }
}

module.exports = produtoController;