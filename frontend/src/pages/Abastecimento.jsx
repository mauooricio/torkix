import { useEffect, useState } from 'react';
import api from '../services/api';

const Abastecimento = () => {
  const [abastecimentos, setAbastecimentos] = useState([]);
  const [veiculos, setVeiculos] = useState([]);
  const [form, setForm] = useState({
    data: '',
    valor: '',
    litros: '',
    tipoCombustivel: '',
    quilometragem: '',
    veiculoId: ''
  });

  const buscarAbastecimentos = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get('/api/abastecimentos', {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (Array.isArray(res.data)) {
        setAbastecimentos(res.data);
      } else {
        console.warn('Formato de resposta inesperado:', res.data);
        setAbastecimentos([]);
      }
    } catch (err) {
      console.error('Erro ao buscar abastecimentos', err);
      setAbastecimentos([]);
    }
  };

  const buscarVeiculos = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await api.get('/api/veiculos', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setVeiculos(res.data.veiculos || []);
    } catch (err) {
      console.error('Erro ao buscar veículos', err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await api.post('/api/abastecimentos', form, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setForm({
        data: '',
        valor: '',
        litros: '',
        tipoCombustivel: '',
        quilometragem: '',
        veiculoId: ''
      });

      buscarAbastecimentos();
    } catch (err) {
      console.error('Erro ao registrar abastecimento', err);
    }
  };

  useEffect(() => {
    buscarAbastecimentos();
    buscarVeiculos();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Registrar Abastecimento</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-8">
        <input type="date" name="data" value={form.data} onChange={handleChange} required />
        <input type="number" name="valor" value={form.valor} onChange={handleChange} required placeholder="Valor (R$)" />
        <input type="number" name="litros" value={form.litros} onChange={handleChange} required placeholder="Litros" />
        <input type="text" name="tipoCombustivel" value={form.tipoCombustivel} onChange={handleChange} required placeholder="Combustível" />
        <input type="number" name="quilometragem" value={form.quilometragem} onChange={handleChange} required placeholder="Quilometragem" />
        <select name="veiculoId" value={form.veiculoId} onChange={handleChange} required>
          <option value="">Selecione um veículo</option>
          {veiculos.map((v) => (
            <option key={v.id} value={v.id}>{v.modelo} - {v.placa}</option>
          ))}
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded col-span-2">
          Registrar
        </button>
      </form>

      <h3 className="text-lg font-semibold mb-2">Histórico de Abastecimentos</h3>
      <table className="w-full border">
        <thead>
          <tr>
            <th>Data</th>
            <th>Valor</th>
            <th>Litros</th>
            <th>Combustível</th>
            <th>KM</th>
            <th>Veículo</th>
          </tr>
        </thead>
        <tbody>
          {abastecimentos.map((item) => (
            <tr key={item.id}>
              <td>{new Date(item.data).toLocaleDateString()}</td>
              <td>R$ {item.valor.toFixed(2)}</td>
              <td>{item.litros}</td>
              <td>{item.tipoCombustivel}</td>
              <td>{item.quilometragem}</td>
              <td>{item.veiculo?.modelo} - {item.veiculo?.placa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Abastecimento;
