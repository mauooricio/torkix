import api from './api';

export const listarVeiculos = async () => {
  const token = localStorage.getItem('token');
  const response = await api.get('/veiculos', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data.veiculos;
};

export const cadastrarVeiculo = async (modelo, placa) => {
  const token = localStorage.getItem('token');
  const response = await api.post('/veiculos', { modelo, placa }, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data.veiculo;
};

export const deletarVeiculo = async (id) => {
  const token = localStorage.getItem('token');
  await api.delete(`/veiculos/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const atualizarVeiculo = async (id, modelo, placa) => {
  const token = localStorage.getItem('token');
  const response = await api.put(`/veiculos/${id}`, { modelo, placa }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
