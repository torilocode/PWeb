var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    console.log(`[LOG] Método: ${req.method} | Rota: ${req.url} | Horário: ${new Date().toLocaleTimeString()}`);
    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req, res) => {
    res.status(404).send(`
        <h1>Erro 404 - Página Não Encontrada</h1>
        <p>A rota solicitada não existe.</p>
        <a href="/">Voltar para a Página Inicial</a>
    `);
});

module.exports = app;