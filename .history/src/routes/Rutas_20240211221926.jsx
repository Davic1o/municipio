import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Admin from '../pages/Administrador/Admin';
import Coord from '../pages/Coord/Coord';
import User from '../pages/User/User';
import Register from '../pages/Register/Register';
import ConfirmacionRegistro from '../pages/ConfirmacionRegistro/ConfirmacionRegistro';

const PrivateRoute = ({ element, redirectTo }) => {
  return user ? element : <Navigate to={redirectTo} />;
};

function Rutas() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser !== null) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    clearSession(setUser, navigate);
    navigate('/');
  };

  const isAdmin = user?.tipo === 'Administrador';
  const isCord = user?.tipo === 'Coordinador';
  const isUser = user?.tipo === 'Usuario';

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Registro" element={<Register />} />
      <Route path="/ConfirmacionRegistro" element={<ConfirmacionRegistro />} />

      <Route
        path="/Administrador"
        element={<PrivateRoute element={<Admin />} redirectTo="/" />}
      />
      <Route
        path="/Coordinador"
        element={<PrivateRoute element={<Coord />} redirectTo="/" />}
      />
      <Route
        path="/Usuario"
        element={<PrivateRoute element={<User />} redirectTo="/" />}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

const clearSession = (setUser, navigate) => {
  localStorage.removeItem('user');
  setUser(null);
};

export default Rutas;
