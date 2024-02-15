import React from 'react'
import { Route, Routes } from 'react-router-dom';

function Rutas() {
  return (
    <Routes>
    <Route path='/' element={<Inicio/>} />
    </Routes>
  )
}

export default Rutas