import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { FaAddressCard } from "react-icons/fa6";
import './register.css';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="login__container">
      <div className="register__recuadro">
        <div className="register__formulario">
          <div className="contenedor__nombre">
            <FaUser className="icon__nombre" />
            <input
              type="text"
              className="inp__nombre"
              placeholder="Nombre de Usuario"
            />
          </div>
          <div className="contenedor__nombre">
          <FaAddressCard className="icon__password"/>
            <input
              type="password"
              className="inp__password"
              placeholder="Ingrese se Cédula"

            />
          </div>
          <div className="contenedor__password">
          <RiLockPasswordFill className="icon__password" />
            <input
              type="password"
              className="inp__password"
              placeholder="Ingrese su Password"

            />

          </div>
          <div className="contenedor__password">
          <RiLockPasswordFill className="icon__password" />
            <input
              type="password"
              className="inp__password"
              placeholder="Repita su Password"

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



