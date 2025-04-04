const express = require('express');
const app = express();
app.use(express.json()); // Essencial para processar o JSON no corpo das requisoções

const PORT = process.env.PORT || 3000;
const authRoutes = require('./src/routes/authRoutes');
app.use('/auth', authRoutes);


// Middleware para entender JSON
app.use(express.json());
const veiculoRoutes = require('./src/routes/veiculoRoutes');
app.use('/api/veiculos', veiculoRoutes);


// Rota de teste
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong 🏓' });
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor Torkix rodando na porta ${PORT}`);
});
