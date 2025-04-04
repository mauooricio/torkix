import { useEffect, useState } from 'react';
import { listarVeiculos } from '../services/veiculoService';

export default function Dashboard() {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    const carregarVeiculos = async () => {
      try {
        const lista = await listarVeiculos();

        // 🔍 VERIFICA A ESTRUTURA DA RESPOSTA
        // Se listarVeiculos() retorna diretamente o array:
        // setVeiculos(lista);

        // Se retorna um objeto com chave "veiculos":
        setVeiculos(lista.veiculos);

      } catch (error) {
        console.error('Erro ao buscar veículos:', error);
        alert('Erro ao buscar veículos');
      }
    };

    carregarVeiculos();
  }, []);

  return (
    <div>
      <h2>Seus Veículos</h2>
      <table>
        <thead>
          <tr>
            <th>Modelo</th>
            <th>Placa</th>
          </tr>
        </thead>
        <tbody>
          {veiculos && veiculos.length > 0 ? (
            veiculos.map((v) => (
              <tr key={v.id}>
                <td>{v.modelo}</td>
                <td>{v.placa}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">Nenhum veículo encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
