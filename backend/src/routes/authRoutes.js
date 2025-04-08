const express = require('express');
const router = express.Router();
const { registrar, loginUsuario } = require('../controllers/authController');

// Rota de cadastro
router.post('/registro', registrar);

// 🆕 Rota de login
router.post('/login', loginUsuario);

module.exports = router;
