const express = require('express');
const router = express.Router();
const controller = require('../controllers/abastecimentoController');
const verificarToken = require('../middlewares/verificarToken');

router.post('/', verificarToken, controller.criarAbastecimento);
router.get('/', verificarToken, controller.listarAbastecimentos);

module.exports = router;
