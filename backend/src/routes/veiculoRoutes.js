const express = require('express');
const router = express.Router();
const {
  listarVeiculos,
  criarVeiculo,
  deletarVeiculo,
  atualizarVeiculo
} = require('../controllers/veiculoController');
const verificarToken = require('../middlewares/verificarToken');

// Rotas protegidas
router.get('/', verificarToken, listarVeiculos);
router.post('/', verificarToken, criarVeiculo);
router.delete('/:id', verificarToken, deletarVeiculo); 
router.put('/:id', verificarToken, atualizarVeiculo);


module.exports = router;
