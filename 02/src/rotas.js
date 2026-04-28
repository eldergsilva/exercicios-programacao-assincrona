const express = require('express');
const { listarPokemons, detalharPokemon } = require('./controlador/pokemon');
 
const rotas = express.Router();

rotas.get('/pokemon',listarPokemons  );
rotas.get('/pokemon/:id',detalharPokemon  );

module.exports = rotas;