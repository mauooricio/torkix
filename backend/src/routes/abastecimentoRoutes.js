const express = require('express');
const router = express.Router();
const controller = require('../controllers/abastecimentoController');

router.post('/', controller.criarAbastecimento);
router.get('/', controller.listarAbastecimentos);

module.exports = router;
