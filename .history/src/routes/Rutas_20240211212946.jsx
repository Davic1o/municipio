import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Admin from '../pages/Administrador/Admin';
import Coord from '../pages/Coord/Coord';
import User from '../pages/User/User';
import Register from '../pages/Register/Register';
import ConfirmacionRegistro from '../pages/ConfirmacionRegistro/ConfirmacionRegistro';

function Rutas() {
  useEffect(() => {
    // Verificar si hay información de sesión en localStorage y redirigir al usuario
    const user = JSON.parse(localStorage.getItem('user'));

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
        element={<Admin />}
        // Agregar una restricción adicional para asegurar que solo se acceda si hay una sesión
        canActivate={() => !!JSON.parse(localStorage.getItem('user'))}
      />
      <Route
        path="/Coordinador"
        element={<Coord />}
        canActivate={() => !!JSON.parse(localStorage.getItem('user'))}
      />
      <Route
        path="/Usuario"
        element={<User />}
        canActivate={() => !!JSON.parse(localStorage.getItem('user'))}
      />

      {/* Ruta por defecto en caso de acceso no autorizado */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Rutas;

