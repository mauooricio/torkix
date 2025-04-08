const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const criarAbastecimento = async (req, res) => {
  const {
    data,
    valor,
    litros,
    tipoCombustivel,
    quilometragem,
    veiculoId
  } = req.body;

  try {
    const novoAbastecimento = await prisma.abastecimento.create({
      data: {
        data: new Date(data),
        valor,
        litros,
        tipoCombustivel,
        quilometragem,
        veiculoId: Number(veiculoId),
      }
    });

    res.status(201).json(novoAbastecimento);
  } catch (error) {
    console.error('Erro ao criar abastecimento:', error);
    res.status(500).json({ erro: 'Erro ao registrar abastecimento' });
  }
};

const listarAbastecimentos = async (req, res) => {
  try {
    const lista = await prisma.abastecimento.findMany({
      include: {
        veiculo: true
      }
    });
    res.json(lista);
  } catch (error) {
    console.error('Erro ao listar abastecimentos:', error);
    res.status(500).json({ erro: 'Erro ao buscar abastecimentos' });
  }
};

module.exports = {
  criarAbastecimento,
  listarAbastecimentos
};
