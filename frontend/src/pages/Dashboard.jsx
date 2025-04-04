import { useState, useEffect } from 'react';
import { listarVeiculos, cadastrarVeiculo, deletarVeiculo } from '../services/veiculoService';

export default function Dashboard() {
  const [veiculos, setVeiculos] = useState([]);
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');

  useEffect(() => {
    carregarVeiculos();
  }, []);

  const carregarVeiculos = async () => {
    try {
      const lista = await listarVeiculos();
      setVeiculos(lista);
    } catch (error) {
      alert('Erro ao carregar veículos');
    }
  };

  const handleCadastro = async (e) => {
    e.preventDefault();
    if (!modelo || !placa) return alert('Preencha todos os campos');

    try {
      await cadastrarVeiculo(modelo, placa);
      setModelo('');
      setPlaca('');
      carregarVeiculos();
    } catch (error) {
      alert('Erro ao cadastrar veículo');
    }
  };

  const handleDeletar = async (id) => {
    if (!confirm('Tem certeza que deseja excluir este veículo?')) return;
    try {
      await deletarVeiculo(id);
      carregarVeiculos();
    } catch (error) {
      alert('Erro ao deletar veículo');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📋 Cadastro de Veículos</h2>

      <form onSubmit={handleCadastro} style={{ marginBottom: '2rem' }}>
        <input
          placeholder="Modelo"
          value={modelo}
          onChange={e => setModelo(e.target.value)}
        />
        <input
          placeholder="Placa"
          value={placa}
          onChange={e => setPlaca(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <h3>🚗 Lista de Veículos</h3>
      {veiculos.length === 0 ? (
        <p>Nenhum veículo encontrado.</p>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Modelo</th>
              <th>Placa</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {veiculos.map((v) => (
              <tr key={v.id}>
                <td>{v.modelo}</td>
                <td>{v.placa}</td>
                <td>
                  <button onClick={() => handleDeletar(v.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
