import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Admin from '../pages/Administrador/Admin';
import Coord from '../pages/Coord/Coord';
import User from '../pages/User/User';
import Register from '../pages/Register/Register';
import ConfirmacionRegistro from '../pages/ConfirmacionRegistro/ConfirmacionRegistro';

function Rutas() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser !== null) {
      setUser(storedUser);
    }
  }, []);

  // Determinar el tipo de usuario utilizando el estado
  const isAdmin = user?.tipo === 'Administrador';
  const isCord = user?.tipo === 'Coordinador';
  const isUser = user?.tipo === 'Usuario';

  return (
    <Routes>
      {/* Rutas públicas accesibles incluso sin sesión */}
      <Route path="/" element={<Login />} />
      <Route path="/Registro" element={<Register />} />
      <Route path="/ConfirmacionRegistro" element={<ConfirmacionRegistro />} />

      {/* Rutas protegidas que requieren sesión */}
      <Route
        path="/Administrador"
        element={isAdmin ? <Admin /> : <Navigate to="/" />}
      />
      <Route
        path="/Coordinador"
        element={isCord ? <Coord /> : <Navigate to="/" />}
      />
      <Route
        path="/Usuario"
        element={isUser ? <User /> : <Navigate to="/" />}
      />

      {/* Ruta por defecto en caso de acceso no autorizado */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Rutas;

