const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota - Caminho
 * Recurso = final do caminho
 * 
 * Metodos HTTP:
 * 
 * GET: Buscar/listar informação do bvack-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar unma informação no back-end
 * 
 * 
 * Tipos de parametros
 * 
 * 
 * Query Params: Parametros nomeados enviados na rota apor o ? geralmente serve para filtros, paginação
 * Route Params: Parametros utilixzados para identificar um unico recurso
 * Request Body: Corpo da requisição,
 * 
 * 
 * 
 */


app.listen(3333);