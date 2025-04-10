import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Dashboard from './pages/Dashboard';
import Abastecimento from './pages/Abastecimento';

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/login" /> }, // rota padrão
  { path: "/login", element: <Login /> },
  { path: "/registro", element: <Registro /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/abastecimento", element: <Abastecimento /> },
]);

export default router;
