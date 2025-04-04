import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Dashboard from './pages/Dashboard';

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
    element: <Registro />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
]);

export default router;
