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
  const [authenticated, setAuthenticated] = useState(false);

// ... (código previo)

useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  console.log('Stored User:', storedUser);

  if (storedUser) {
    setUser(storedUser);
    setAuthenticated(true);
  }

  console.log('Authenticated:', authenticated);
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
        canActivate={() => authenticated}
      />
      <Route
        path="/Coordinador"
        element={<Coord />}
        canActivate={() => authenticated}
      />
      <Route
        path="/Usuario"
        element={<User />}
        canActivate={() => authenticated}
      />

      {/* Ruta por defecto en caso de acceso no autorizado */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Rutas;

