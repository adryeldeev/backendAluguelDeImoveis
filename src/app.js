const express = require('express');
const path = require('node:path');
const cors = require('cors');
const { router } = require('./routes.js');
const app = express();

// Configuração do CORS
app.use(cors());

// Permitindo acesso aos arquivos de upload
app.use('/uploads', express.static(path.resolve(__dirname, '../', 'uploads')));

// Middleware para fazer o parse do corpo das requisições como JSON
app.use(express.json());

// Middleware para definir os cabeçalhos CORS de forma geral
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});





// Utilização do roteador

const port = process.env.PORT || 8000;
app.use(router);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});