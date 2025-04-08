const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./src/routes/authRoutes');
const veiculoRoutes = require('./src/routes/veiculoRoutes');
const abastecimentoRoutes = require('./src/routes/abastecimentoRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

//  Aplica o CORS
app.use(cors({
  origin: '*', // libera acesso de qualquer lugar
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

//  Middleware para aceitar JSON
app.use(express.json());

//  Rotas
app.use('/api/auth', authRoutes);
app.use('/api/veiculos', veiculoRoutes);
app.use('/api/abastecimentos', abastecimentoRoutes);

//  Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor Torkix rodando na porta ${PORT}`);
});
