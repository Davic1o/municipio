import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { FaAddressCard } from "react-icons/fa6";
import './login.css';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="register__container">
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
          <div className="contenedor__nombre">
          <FaAddressCard className="icon__password"/>
            <input
              type="password"
              className="inp__password"
              placeholder="INGRESE SU CEDULA"

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
          <div className="contenedor__password">
          <RiLockPasswordFill className="icon__password" />
            <input
              type="password"
              className="inp__password"
              placeholder="REPITA SU PASSWORD"

            />


          </div>
          <div className="contendor__ingresar">
            <button className="btn__ingresar" >
              Registrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;



