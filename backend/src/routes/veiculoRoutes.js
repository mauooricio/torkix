const express = require('express');
const router = express.Router();
const autenticar = require('../middlewares/authMiddleware');
const { criarVeiculo, listarVeiculos } = require('../controllers/veiculoController');

// Proteger as rotas com o middleware "autenticar"
router.post('/', autenticar, criarVeiculo);
router.get('/', autenticar, listarVeiculos);

module.exports = router;
