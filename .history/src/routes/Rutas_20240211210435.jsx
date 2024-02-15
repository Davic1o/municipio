import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
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
    if (user) {
      if (user.tipo === 'Administrador') {
        navigate('/Administrador');
      } else if (user.tipo === 'Usuario') {
        navigate('/Usuario');
      } else if (user.tipo === 'Coordinador') {
        navigate('/Coordinador');
      }
    }
  }, []); 

  return (


    <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route exact path="/Registro" element={<Register/>} />
    <Route exact path="/ConfirmacionRegistro" element={<ConfirmacionRegistro/>} />
    <Route exact path="/Administrador" element={<Admin/>} />
    <Route path='/Coordinador' element={<Coord/>} />
    <Route path='/Usuario' element={<User/>} />

    </Routes>

  )
}

export default Rutas