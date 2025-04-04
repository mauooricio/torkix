import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Dashboard from './pages/Dashboard';

const isAutenticado = () => {
  const token = localStorage.getItem('token');
  return !!token;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/registro', 
    element: <Registro />,
  },
  {
    path: '/dashboard',
    element: isAutenticado() ? <Dashboard /> : <Login />
  }
]);

export default router;
