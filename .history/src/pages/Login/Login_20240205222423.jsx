import React, { useState } from 'react';
import './login.css';  // Asegúrate de tener un archivo de estilo CSS para tu componente

const Login = () => {


  return (
    <div className="login-container">
        <div className="login__recuadro">
            <div className="login__formulario">
                <label htmlFor="" className="lbl__nombre">Usuario</label>
                <input type="text" className="inp__nombre" />
            </div>

        </div>


    </div>
  );
};

export default Login;
