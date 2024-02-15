import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Admin from '../pages/Administrador/Admin';
import Coord from '../pages/Coord/Coord';
import User from '../pages/User/User';
import Register from '../pages/Register/Register';
import ConfirmacionRegistro from '../pages/ConfirmacionRegistro/ConfirmacionRegistro';


function Rutas() {
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