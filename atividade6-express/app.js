const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] Método: ${req.method} | Rota: ${req.url}`);
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>Página Inicial (Index)</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>Página: /about</h1>');
});

app.post('/data', (req, res) => {
    res.send('<h1>Página: /data (Requisição POST recebida com sucesso!)</h1>');
});

app.get('/users', (req, res) => {
    res.redirect('/users/signup');
});

app.get('/users/signin', (req, res) => {
    res.send('<h1>Página: /users/signin</h1>');
});

app.get('/users/signup', (req, res) => {
    res.send('<h1>Página: /users/signup</h1>');
});

app.get('/users/:userid', (req, res) => {
    const userId = req.params.userid;
    res.send(`<h1>Boas-vindas, usuário com ID: ${userId}!</h1>`);
});

app.use((req, res) => {
    res.status(404).send(`
        <h1>Erro 404 - Página Não Encontrada</h1>
        <p>A rota solicitada não existe.</p>
        <a href="/">Voltar para o Index</a>
    `);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});