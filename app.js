const express = require('express'),
      mongoose = require('mongoose'),
      produtoRouter = require('./routes/produtoRoutes');

var app = express();
var router = express.Router();

var url = "mongodb://ygorvieira:senha@ds161551.mlab.com:61551/ygorprodutosdb";
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => {
    console.log('Conectado ao MongoDB');
});

mongoose.connect(url);

app.listen(5000, () => {
    console.log('Servidor escutando na porta 5000');
});

router.get('/', (req, res) => {
    res.send('<h1>Página Inicial</h1>')
});

app.use('/', router);
app.use('/produtos', produtoRouter);