const express = require('express')
const produto = require('./bancodedados/produtos')
const {listarProdutos,listarProdutosPorId,CalcularFreteDoproduto, detalharProduto} = require('./controladores/calculadora')
const rotas = express();

rotas.get('/produtos',listarProdutos);
rotas.get('/produtos/:idProduto',detalharProduto);
rotas.get('/produtos/:idProduto/frete/:cep',CalcularFreteDoproduto)





module.exports = rotas