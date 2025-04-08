const express = require('express');
const router = express.Router();
const verificarToken = require('../middlewares/verificarToken');
const {
  listarVeiculos,
  criarVeiculo,
  deletarVeiculo,
  atualizarVeiculo
} = require('../controllers/veiculoController');

router.get('/', verificarToken, listarVeiculos);
router.post('/', verificarToken, criarVeiculo);
router.delete('/:id', verificarToken, deletarVeiculo);
router.put('/:id', verificarToken, atualizarVeiculo);

module.exports = router;
