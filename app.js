const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Bem vindo ao Express');
})

app.listen(5000, () => {
    console.log('Servidor escutando na porta 5000');
})
