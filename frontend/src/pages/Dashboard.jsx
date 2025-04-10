import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  listarVeiculos,
  cadastrarVeiculo,
  deletarVeiculo,
  atualizarVeiculo
} from '../services/veiculoService';

export default function Dashboard() {
  const [veiculos, setVeiculos] = useState([]);
  const [modelo, setModelo] = useState('');
  const [placa, setPlaca] = useState('');
  const [modoEdicao, setModoEdicao] = useState(false);
  const [veiculoEditando, setVeiculoEditando] = useState(null);

  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const navigate = useNavigate();

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
      if (modoEdicao) {
        await atualizarVeiculo(veiculoEditando.id, modelo, placa);
        setModoEdicao(false);
        setVeiculoEditando(null);
      } else {
        await cadastrarVeiculo(modelo, placa);
      }

      setModelo('');
      setPlaca('');
      carregarVeiculos();
    } catch (error) {
      alert('Erro ao salvar veículo');
    }
  };

  const handleDeletar = async (id) => {
    if (!confirm('Tem certeza que deseja excluir este veículo?')) return;
    try {
      await deletarVeiculo(id);
      carregarVeiculos();
    } catch (error) {
      alert('Erro ao excluir veículo');
    }
  };

  const iniciarEdicao = (veiculo) => {
    setModelo(veiculo.modelo);
    setPlaca(veiculo.placa);
    setModoEdicao(true);
    setVeiculoEditando(veiculo);
  };

  const cancelarEdicao = () => {
    setModelo('');
    setPlaca('');
    setModoEdicao(false);
    setVeiculoEditando(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    window.location.href = '/login';
  };

  const irParaAbastecimento = () => {
    navigate('/abastecimento');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
        <span>👤 Olá, {usuario?.nome || 'Usuário'}!</span>
        <button onClick={handleLogout}> Logout</button>
      </div>

      <button onClick={irParaAbastecimento} style={{ marginBottom: '1rem' }}>
        Ir para Abastecimentos
      </button>

      <h2>{modoEdicao ? 'Editar Veículo' : 'Cadastro de Veículos'}</h2>

      <form onSubmit={handleCadastro} style={{ marginBottom: '2rem' }}>
        <input placeholder="Modelo" value={modelo} onChange={e => setModelo(e.target.value)} />
        <input placeholder="Placa" value={placa} onChange={e => setPlaca(e.target.value)} />
        <button type="submit">{modoEdicao ? 'Salvar' : 'Cadastrar'}</button>
        {modoEdicao && (
          <button type="button" onClick={cancelarEdicao} style={{ marginLeft: '10px' }}>
            Cancelar
          </button>
        )}
      </form>

      <h3>Lista de Veículos</h3>
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
                  <button onClick={() => iniciarEdicao(v)}>Editar</button>
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
