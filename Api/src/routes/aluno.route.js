const router = require('express-promise-router')();
const alunoController = require('../controllers/aluno.controller');

// ==> Criar um novo 'Usuario': (POST): localhost:3000/usuarios
router.post('/alunos', alunoController.createAluno);

module.exports = router;