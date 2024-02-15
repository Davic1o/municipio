import React, { useState } from 'react';
import './login.css';  // Asegúrate de tener un archivo de estilo CSS para tu componente

const Login = () => {


  return (
    <div className="login-container">
        <div className="login__recuadro">
            <div className="login__formulario">
                <div className="contendor__nombre">
                <label htmlFor="" className="lbl__nombre">Usuario</label>
                <input type="text" className="inp__nombre" />
                </div>
                <div className="contendor__password">
                <label htmlFor="" className="lbl__password">Password</label>
                <input type="password" className="inp__password" />
                </div>
                <div className="contendor__recuerdame">
                <input type="checkbox" className="inp__password" />
                <label htmlFor="" className="lbl__password">Recuerdame</label>
                </div>
                <div className="contendor__registrar">

                <label htmlFor="" className="lbl__password">¿No tienes una cuenta?</label>
                </div>
            </div>

        </div>


    </div>
  );
};

export default Login;
