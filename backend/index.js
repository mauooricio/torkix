const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const authRoutes = require('./src/routes/authRoutes');
const veiculoRoutes = require('./src/routes/veiculoRoutes');
const abastecimentoRoutes = require('./src/routes/abastecimentoRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Libera o domínio da Vercel (produção) e localhost (dev)
const allowedOrigins = [
  'https://torkix.vercel.app',
  'http://localhost:5173' // Vite dev server
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// Middleware para aceitar JSON
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/veiculos', veiculoRoutes);
app.use('/api/abastecimentos', abastecimentoRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor Torkix rodando na porta ${PORT}`);
});
