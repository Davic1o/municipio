import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Admin from '../pages/Administrador/Admin';
import Coord from '../pages/Coord/Coord';
import User from '../pages/User/User';
import Register from '../pages/Register/Register';
import ConfirmacionRegistro from '../pages/ConfirmacionRegistro/ConfirmacionRegistro';

function Rutas() {
  const [user, setUser] = useState(null);

  // Variables para el tipo de usuario
  let isAdmin = false;
  let isCord = false;
  let isUser = false;

  useEffect(() => {
    // Verificar si hay información de sesión en localStorage y actualizar el estado
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser !== null) {
      setUser(storedUser);

      // Actualizar las variables de tipo de usuario
      if (storedUser.tipo === 'Administrador') {
        isAdmin = true;
      } else if (storedUser.tipo === 'Coordinador') {
        isCord = true;
      } else if (storedUser.tipo === 'Usuario') {
        isUser = true;
      }
    }
  }, []); 

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
