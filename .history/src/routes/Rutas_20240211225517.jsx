import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Admin from '../pages/Administrador/Admin';
import Coord from '../pages/Coord/Coord';
import User from '../pages/User/User';
import Register from '../pages/Register/Register';
import ConfirmacionRegistro from '../pages/ConfirmacionRegistro/ConfirmacionRegistro';

function Rutas() {
  const user = JSON.parse(localStorage.getItem('user')) || { tipo: null };

  // Función para verificar el tipo de usuario y renderizar el componente correspondiente
  const renderProtectedRoute = (component, allowedType) =>
    user.tipo === allowedType ? React.createElement(component, { user }) : <Navigate to="/" replace />;

  return (
    <Routes>
      {/* Rutas públicas accesibles incluso sin sesión */}
      <Route path="/" element={<Login />} />
      <Route path="/Registro" element={<Register />} />
      <Route path="/ConfirmacionRegistro" element={<ConfirmacionRegistro />} />

      {/* Rutas protegidas que requieren sesión */}
      <Route path="/Administrador" element={() => renderProtectedRoute(Admin, 'Administrador')} />
      <Route path="/Coordinador" element={() => renderProtectedRoute(Coord, 'Coordinador')} />
      <Route path="/Usuario" element={() => renderProtectedRoute(User, 'Usuario')} />

      {/* Ruta por defecto en caso de acceso no autorizado */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Rutas;


