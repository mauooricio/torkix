const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

//  Configurando CORS para permitir requisições do frontend
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174'],
  credentials: true
}));


app.use(express.json());

// Rotas
const authRoutes = require('./src/routes/authRoutes');
app.use('/auth', authRoutes);

const veiculoRoutes = require('./src/routes/veiculoRoutes');
app.use('/api/veiculos', veiculoRoutes);

const abastecimentoRoutes = require('./src/routes/abastecimentoRoutes');
app.use('/api/abastecimentos', abastecimentoRoutes);


// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor Torkix rodando na porta ${PORT}`);
});

