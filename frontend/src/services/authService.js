import api from './api';

export const registrar = async (nome, email, senha) => {
  const response = await api.post('/api/auth/registro', { nome, email, senha });
  return response.data;
};

export const login = async (email, senha) => {
  const response = await api.post('/api/auth/login', { email, senha });
  return response.data;
};
