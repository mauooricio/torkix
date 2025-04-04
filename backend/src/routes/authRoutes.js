const express = require('express');
const router = express.Router();
const { registrarUsuario, loginUsuario } = require('../controllers/authController');

// Rota de cadastro
router.post('/registro', registrarUsuario);

// 🆕 Rota de login
router.post('/login', loginUsuario);

module.exports = router;
