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
