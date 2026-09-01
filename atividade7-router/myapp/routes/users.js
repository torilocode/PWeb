var express = require('express');
var router = express.Router();

// 1. Acesso a /users (sem userid) -> Redireciona para /users/signup [Requisito 4]
router.get('/', function(req, res, next) {
  res.redirect('/users/signup'); // Usa res.redirect() conforme solicitado
});

// 2. Rota GET /users/signin [Requisito 1]
router.get('/signin', function(req, res, next) {
  res.send('<h1>Página de Sign In ( /users/signin )</h1>');
});

// 3. Rota GET /users/signup [Requisito 1]
router.get('/signup', function(req, res, next) {
  res.send('<h1>Página de Sign Up ( /users/signup )</h1>');
});

// 4. Rota GET /users/:userid -> Recebe o id e exibe mensagem de boas-vindas [Requisito 3]
router.get('/:userid', function(req, res, next) {
  var userid = req.params.userid; // Captura o parâmetro da URL
  res.send(`<h1>Seja bem-vindo(a), usuário: ${userid}!</h1>`);
});

module.exports = router;