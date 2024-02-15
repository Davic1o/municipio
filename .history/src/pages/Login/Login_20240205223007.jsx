import React, { useState } from 'react';
import './login.css';  // Asegúrate de tener un archivo de estilo CSS para tu componente

const Login = () => {
  return (
    <div className="login-container">
      <div className="login__recuadro">
        <div className="login__formulario">
          <div className="contenedor__nombre">
            <label htmlFor="" className="lbl__nombre">Usuario</label>
            <input type="text" className="inp__nombre" />
          </div>
          <div className="contenedor__password">
            <label htmlFor="" className="lbl__password">Contraseña</label>
            <input type="password" className="inp__password" />
          </div>
          <div className="contenedor__recuerdame">
            <input type="checkbox" className="inp__recuerdame" />
            <label htmlFor="" className="lbl__recuerdame">Recuérdame</label>
          </div>
          <div className="contenedor__registrar">
            <label htmlFor="" className="lbl__registrar">¿No tienes una cuenta?</label>
          </div>
          <div className="contendor__login">
            <button className="btn__login">Ingresar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

