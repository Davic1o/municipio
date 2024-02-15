import React, { useEffect } from 'react';
import { Routes, Route, Switch, Redirect } from 'react-router-dom';
import { UserProvider } from '../context/UserContext';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login/Login';
import Admin from '../pages/Administrador/Admin';
import Coord from '../pages/Coord/Coord';
import User from '../pages/User/User';
import Register from '../pages/Register/Register';
import ConfirmacionRegistro from '../pages/ConfirmacionRegistro/ConfirmacionRegistro';

function Rutas() {


  return (



    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registro" element={<Register />} />
        <Route path="/ConfirmacionRegistro" element={<ConfirmacionRegistro />} />
        <PrivateRoute path="/Administrador" component={Admin} roles={['Administrador']} />
        <PrivateRoute path="/Coordinador" component={Coord} roles={['Coordinador']} />
        <PrivateRoute path="/Usuario" component={User} roles={['Usuario']} />
      </Routes>

    </UserProvider>

  );
}

export default Rutas;

