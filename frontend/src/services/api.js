import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // deve estar no .env do Vite
});

export default api;
