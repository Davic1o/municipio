import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {

      navigate("/Coordinador");
 
  };

  return (
    <div className="login__container">
      <div className="login__recuadro">
        <div className="login__formulario">
          <div className="contenedor__nombre">
            <FaUser className="icon__nombre" />
            <input
              type="text"
              className="inp__nombre"
              placeholder="NOMBRE DE USUARIO"

            />
          </div>
          <div className="contenedor__password">
            <RiLockPasswordFill className="icon__password" />
            <input
              type="password"
              className="inp__password"
              placeholder="INGRESE SU PASSWORD"
            />
          </div>
          <div className="contenedor__recuerdame">
            <input type="checkbox" className="inp__recuerdame" />
            <label htmlFor="" className="lbl__recuerdame">
              Recuérdame
            </label>
          </div>
          <div className="contenedor__registrar">
            <label htmlFor="" className="lbl__registrar">
              ¿No tienes una cuenta?
            </label>
          </div>
          <div className="contendor__ingresar">
            <button className="btn__ingresar" onClick={handleLogin}>
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;



