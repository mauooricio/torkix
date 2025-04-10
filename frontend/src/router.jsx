import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Dashboard from './pages/Dashboard';
import Abastecimento from './pages/Abastecimento';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redireciona rota raiz para /login */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Rotas do app */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/abastecimento" element={<Abastecimento />} />
      </Routes>
    </BrowserRouter>
  );
}
