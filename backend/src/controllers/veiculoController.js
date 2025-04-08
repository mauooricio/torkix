const prisma = require('../config/prisma');

const criarVeiculo = async (req, res) => {
  const { modelo, placa } = req.body;
  const usuarioId = req.usuario.id;

  if (!modelo || !placa) {
    return res.status(400).json({ error: 'Modelo e placa são obrigatórios.' });
  }

  try {
    const veiculo = await prisma.veiculo.create({
      data: { modelo, placa, usuarioId },
    });

    res.status(201).json({ message: 'Veículo cadastrado com sucesso!', veiculo });
  } catch (error) {
    console.error('Erro ao cadastrar veículo:', error);
    res.status(500).json({ error: 'Erro interno ao cadastrar veículo.' });
  }
};

const listarVeiculos = async (req, res) => {
  const usuarioId = req.usuario.id;

  try {
    const veiculos = await prisma.veiculo.findMany({
      where: { usuarioId },
    });

    res.status(200).json(veiculos);
  } catch (error) {
    console.error('Erro ao listar veículos:', error);
    res.status(500).json({ error: 'Erro interno ao listar veículos.' });
  }
};

const deletarVeiculo = async (req, res) => {
  const { id } = req.params;
  const usuarioId = req.usuario.id;

  try {
    const veiculo = await prisma.veiculo.findUnique({
      where: { id: Number(id) },
    });

    if (!veiculo || veiculo.usuarioId !== usuarioId) {
      return res.status(404).json({ error: 'Veículo não encontrado.' });
    }

    await prisma.veiculo.delete({ where: { id: Number(id) } });

    res.status(200).json({ message: 'Veículo deletado com sucesso.' });
  } catch (error) {
    console.error('Erro ao deletar veículo:', error);
    res.status(500).json({ error: 'Erro interno ao deletar veículo.' });
  }
};

const atualizarVeiculo = async (req, res) => {
  const { id } = req.params;
  const { modelo, placa } = req.body;
  const usuarioId = req.usuario.id;

  if (!modelo || !placa) {
    return res.status(400).json({ error: 'Modelo e placa são obrigatórios.' });
  }

  try {
    const atualizado = await prisma.veiculo.updateMany({
      where: { id: Number(id), usuarioId },
      data: { modelo, placa },
    });

    if (atualizado.count === 0) {
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
