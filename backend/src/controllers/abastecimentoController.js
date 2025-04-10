const prisma = require('../config/prisma');

// GET /api/abastecimentos
const listarAbastecimentos = async (req, res) => {
  try {
    const usuarioId = req.usuario.id;

    const abastecimentos = await prisma.abastecimento.findMany({
      where: {
        veiculo: {
          usuarioId: usuarioId,
        },
      },
      include: {
        veiculo: true,
      },
      orderBy: {
        data: 'desc',
      },
    });

    res.json(abastecimentos);
  } catch (err) {
    console.error('Erro ao listar abastecimentos:', err);
    res.status(500).json({ error: 'Erro ao listar abastecimentos' });
  }
};

// POST /api/abastecimentos
const criarAbastecimento = async (req, res) => {
  try {
    const {
      data,
      valor,
      litros,
      tipoCombustivel,
      quilometragem,
      veiculoId,
    } = req.body;

    const novoAbastecimento = await prisma.abastecimento.create({
      data: {
        data: new Date(data),
        valor: parseFloat(valor),
        litros: parseFloat(litros),
        tipoCombustivel,
        quilometragem: parseFloat(quilometragem),
        veiculoId: parseInt(veiculoId),
      },
      include: {
        veiculo: true,
      },
    });

    res.status(201).json(novoAbastecimento);
  } catch (err) {
    console.error('⚠️ Erro detalhado ao criar abastecimento:', err);
    res.status(500).json({ error: 'Erro ao criar abastecimento', detalhes: err.message });
  }
};


module.exports = {
  listarAbastecimentos,
  criarAbastecimento,
};
