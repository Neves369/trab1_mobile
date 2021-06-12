const express = require('express');
const cors = require('cors');

const app = express();

// ==> Rotas da API:
const alunoRoute = require('./routes/aluno.route');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use('/', alunoRoute);



module.exports = app;