import api from './api';

// Login do usuário
export const login = async (email, senha) => {
  const response = await api.post('/auth/login', { email, senha });
  return response.data;
};

// Registro do usuário
export const registrarUsuario = async (nome, email, senha) => {
  const response = await api.post('/auth/registro', { nome, email, senha });
  return response.data;
};
