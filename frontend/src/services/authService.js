// frontend/src/services/authService.js
import api from './api';

export const login = async (email, senha) => {
  const response = await api.post('/auth/login', { email, senha }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};


export const registro = async (nome, email, senha) => {
  const response = await api.post('/auth/registro', { nome, email, senha });
  return response.data;
};
