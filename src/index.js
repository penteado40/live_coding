const express = require('express');
require('express-async-errors');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use((error, request, response,next)=>{
    console.log(error);
    response.sendStatus(500);
});

app.listen(8000, ()=> console.log('Servidor iniciado em http://localhost:8000'));