const express = require('express');
const routes = require('./routes');
const app = express();
require('./database');

app.use(express.json());
app.use(routes)

app.listen(3000, () =>{
    console.log('O servidor esta rodando na porta http://localhost:3000')
});


