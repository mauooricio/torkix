import { useState } from 'react';
import { registrar } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export default function Registro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleRegistro = async (e) => {
    e.preventDefault();

    if (!nome || !email || !senha) {
      return alert('Preencha todos os campos');
    }

    try {
      await registrar(nome, email, senha); // Correto: nome da função no authService
      alert('Usuário registrado com sucesso!');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
      alert('Erro ao registrar usuário');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Registro</h2>
      <form onSubmit={handleRegistro}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>

      <p style={{ marginTop: '1rem' }}>
        Já tem uma conta? <a href="/login">Voltar para Login</a>
      </p>
    </div>
  );
}
