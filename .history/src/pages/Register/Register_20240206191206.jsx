import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaAddressCard } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [cedula, setCedula] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validarFormulario = () => {
    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      return false;
    }

    setErrorMessage('');
    // Aquí puedes realizar acciones adicionales si la validación es exitosa

    return true;
  };

  const handleRegistroClick = () => {
    if (validarFormulario()) {
      // Realizar acciones adicionales para el registro
      console.log('Registro exitoso');
    }
  };

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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="contenedor__nombre">
            <FaAddressCard className="icon__password" />
            <input
              type="text"
              className="inp__nombre"
              placeholder="Ingrese su Cédula"
              value={cedula}
              onChange={(e) => setCedula(e.target.value)}
            />
          </div>
          <div className="contenedor__password">
            <RiLockPasswordFill className="icon__password" />
            <input
              type="password"
              className="inp__password"
              placeholder="Ingrese su Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="contenedor__password">
            <RiLockPasswordFill className="icon__password" />
            <input
              type="password"
              className="inp__password"
              placeholder="Repita su Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="contenedor__registrar">
            <Link to={'/'}>
              <label htmlFor="" className="lbl__registrar">
                ¿Ya tienes una cuenta?
              </label>
            </Link>
          </div>
          <div className="contendor__ingresar">
            <button className="btn__ingresar" onClick={handleRegistroClick}>
              Registrar
            </button>
            {errorMessage && alert('El password no es el mismo ')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;



