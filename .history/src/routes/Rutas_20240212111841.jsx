import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Login from '../pages/Login/Login';
import Admin from '../pages/Administrador/Admin';
import Coord from '../pages/Coord/Coord';
import User from '../pages/User/User';
import Register from '../pages/Register/Register';
import ConfirmacionRegistro from '../pages/ConfirmacionRegistro/ConfirmacionRegistro';

function Rutas() {


  return (



<userprovider>
  <routes>
    <route path="/" element="{<Login">{'}'} /&gt;
      <route path="/Registro" element="{<Register">{'}'} /&gt;
        <route path="/ConfirmacionRegistro" element="{<ConfirmacionRegistro">{'}'} /&gt;
          {'{'}/* Rutas protegidas que requieren sesión */{'}'}
          <route path="/Administrador" element="{<Admin">{'}'}
            /&gt;
            <route path="/Coordinador" element="{<Coord">{'}'}
              /&gt;
              <route path="/Usuario" element="{<User">{'}'}
                /&gt;
                {'{'}/* Ruta por defecto en caso de acceso no autorizado */{'}'}
                <route path="*" element="{<Navigate" to="/">{'}'} /&gt;
                </route></route></route></route></route></route></route></routes>
</userprovider>


  );
}

export default Rutas;

