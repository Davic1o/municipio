import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Admin from '../pages/Administrador/Admin';
import Coord from '../pages/Coord/Coord';
import User from '../pages/User/User';
import Register from '../pages/Register/Register';
import ConfirmacionRegistro from '../pages/ConfirmacionRegistro/ConfirmacionRegistro';

function Rutas() {
 
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <Routes>
      {/* Rutas públicas accesibles incluso sin sesión */}
      <Route path="/" element={<Login />} />

      <Route path="/Registro" element={<Register />} />
      
      <Route path="/ConfirmacionRegistro" element={<ConfirmacionRegistro />} />

      {/* Rutas protegidas que requieren sesión */}
      <Route
        path="/Administrador"
        element={user.tipo==='Administrador' ? <Admin /> : <Navigate to="/" />}
      />
      <Route
        path="/Coordinador"
        element={user.tipo==='Coordinador'? <Coord /> : <Navigate to="/" />}
      />
      <Route
        path="/Usuario"
        element={user.tipo==='Usuario' ? <User /> : <Navigate to="/" />}
      />

      {/* Ruta por defecto en caso de acceso no autorizado */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Rutas;

