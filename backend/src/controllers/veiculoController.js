const prisma = require('../config/prisma');

// POST /api/veiculos
const criarVeiculo = async (req, res) => {
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

// DELETE /api/veiculos/:id
const deletarVeiculo = async (req, res) => {
  const { id } = req.params;
  const usuarioId = req.usuario.id;

  try {
    const veiculo = await prisma.Veiculo.findUnique({
      where: { id: Number(id) },
    });

    if (!veiculo || veiculo.usuarioId !== usuarioId) {
      return res.status(404).json({ error: 'Veículo não encontrado.' });
    }

    await prisma.Veiculo.delete({
      where: { id: Number(id) },
    });

    res.status(200).json({ message: 'Veículo deletado com sucesso.' });
  } catch (error) {
    console.error('Erro ao deletar veículo:', error);
    res.status(500).json({ error: 'Erro interno ao deletar veículo.' });
  }
};

// PUT /api/veiculos/:id
const atualizarVeiculo = async (req, res) => {
  const { id } = req.params;
  const { modelo, placa } = req.body;
  const usuarioId = req.usuario.id;

  if (!modelo || !placa) {
    return res.status(400).json({ error: 'Modelo e placa são obrigatórios.' });
  }

  try {
    const veiculo = await prisma.Veiculo.updateMany({
      where: { id: Number(id), usuarioId },
      data: { modelo, placa },
    });

    if (veiculo.count === 0) {
      return res.status(404).json({ error: 'Veículo não encontrado ou não pertence ao usuário.' });
    }

    res.status(200).json({ message: 'Veículo atualizado com sucesso!' });
  } catch (error) {
    console.error('Erro ao atualizar veículo:', error);
    res.status(500).json({ error: 'Erro interno ao atualizar veículo.' });
  }
};

module.exports = {
  criarVeiculo,
  listarVeiculos,
  deletarVeiculo,
  atualizarVeiculo
};
