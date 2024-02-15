import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Admin from '../pages/Admin/Admin';
import Coord from '../pages/Coord/Coord';


function Rutas() {
  return (
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/Administrador' element={<Admin/>} />
    <Route path='/Coordinador' element={<Coord/>} />

    </Routes>
  )
}

export default Rutas