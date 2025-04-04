const prisma = require('../config/prisma');

// POST /api/veiculos
const cadastrarVeiculo = async (req, res) => {
  const { modelo, placa } = req.body;
  const usuarioId = req.usuario.id;

  if (!modelo || !placa) {
    return res.status(400).json({ error: 'Modelo e placa são obrigatórios.' });
  }

  try {
    const veiculo = await prisma.Veiculo.create({
      data: {
        modelo,
        placa,
        usuarioId
      },
    });

    res.status(201).json({
      message: 'Veículo cadastrado com sucesso!',
      veiculo,
    });
  } catch (error) {
    console.error('Erro ao cadastrar veículo:', error);
    res.status(500).json({ error: 'Erro interno ao cadastrar veículo.' });
  }
};

// GET /api/veiculos
const listarVeiculos = async (req, res) => {
  const usuarioId = req.usuario.id;

  try {
    const veiculos = await prisma.Veiculo.findMany({
      where: { usuarioId },
    });

    res.status(200).json({ veiculos });
  } catch (error) {
    console.error('Erro ao listar veículos:', error);
    res.status(500).json({ error: 'Erro interno ao listar veículos.' });
  }
};

module.exports = {
  cadastrarVeiculo,
  listarVeiculos
};
