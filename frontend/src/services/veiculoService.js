import api from './api';

export const listarVeiculos = async () => {
  const token = localStorage.getItem('token');
  const response = await api.get('/api/veiculos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data.veiculos;
};

export const cadastrarVeiculo = async (modelo, placa) => {
  const token = localStorage.getItem('token');
  const response = await api.post('/api/veiculos', { modelo, placa }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data.veiculo;
};

export const deletarVeiculo = async (id) => {
  const token = localStorage.getItem('token');
  await api.delete(`/api/veiculos/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const atualizarVeiculo = async (id, modelo, placa) => {
  const token = localStorage.getItem('token');
  const response = await api.put(`/api/veiculos/${id}`, { modelo, placa }, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

