
import api from './api';

// Rota: POST /api/auth/registro
export const registrar = async (nome, email, senha) => {
  const response = await api.post('/api/auth/registro', { nome, email, senha });
  return response.data;
};

// Rota: POST /api/auth/login
export const login = async (email, senha) => {
  const response = await api.post('/api/auth/login', { email, senha });
  return response.data;
};
