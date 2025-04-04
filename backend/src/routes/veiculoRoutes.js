const express = require('express');
const router = express.Router();

const { listarVeiculos, cadastrarVeiculo } = require('../controllers/veiculoController');
const verificarToken = require('../middlewares/verificarToken');

router.get('/', verificarToken, listarVeiculos);
router.post('/', verificarToken, cadastrarVeiculo);

module.exports = router;
