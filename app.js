const express = require('express'),
      mongoose = require('mongoose');

var app = express();

var url;
var db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => {
    console.log('Conectado ao MongoDB');
})

mongoose.connect(url);

app.get('/', (req, res) => {
    res.send('Bem vindo ao Express');
})

app.listen(5000, () => {
    console.log('Servidor escutando na porta 5000');
})
