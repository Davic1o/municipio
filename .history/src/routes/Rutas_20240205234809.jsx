import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Admin from '../pages/Admin/Admin';
import Coord from '../pages/Coord/Coord';
import User from '../pages/User/User';


function Rutas() {
  return (
    <Router>

    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/Administrador' element={<Admin/>} />
    <Route path='/Coordinador' element={<Coord/>} />
    <Route path='/Usuario' element={<User/>} />

    </Routes>
    </Router>
  )
}

export default Rutas