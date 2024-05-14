const express = require('express');
const { router } = require('./routes.js');
const cors = require('cors');
const path = require('path');
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

app.use((req, res, next) => {
    // Verifica se a requisição é para o diretório raiz
    if (req.url === '/') {
        // Redireciona para a rota principal desejada
        return res.redirect('/');
    }
    next();
});



// Utilização do roteador
app.use(router);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});