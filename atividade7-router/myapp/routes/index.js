var express = require('express');
var router = express.Router();

// 1. Rota GET / [Requisito 1]
router.get('/', function(req, res, next) {
  res.send('<h1>Página Inicial ( / )</h1>');
});

// 2. Rota GET /about [Requisito 1]
router.get('/about', function(req, res, next) {
  res.send('<h1>Página About ( /about )</h1>');
});

// 3. Rota POST /data [Requisito 1]
router.post('/data', function(req, res, next) {
  res.send('<h1>Página Data - Requisição POST recebida!</h1>');
});

module.exports = router;