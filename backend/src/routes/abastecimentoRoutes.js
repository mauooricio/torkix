const express = require('express');
const router = express.Router();
const controller = require('../controllers/abastecimentoController');
const verificarToken = require('../middlewares/verificarToken');

router.use(verificarToken); // protege todas as rotas

router.get('/', controller.listarAbastecimentos);
router.post('/', controller.criarAbastecimento);

module.exports = router;
