const express = require('express');
const router = express.Router();
const controller = require('../controllers/abastecimentoController');
const verificarToken = require('../middlewares/verificarToken');

// Aplica o middleware em todas as rotas abaixo
router.use(verificarToken);

router.post('/', controller.criarAbastecimento);
router.get('/', controller.listarAbastecimentos);

module.exports = router;
