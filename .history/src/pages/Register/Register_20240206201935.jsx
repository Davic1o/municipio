import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaAddressCard } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import './register.css';

const Register = () => {
  const Navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [cedula, setCedula] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [zona, setZona] = useState(''); // Nuevo estado para la zona
  const [errorMessage, setErrorMessage] = useState('');

  const validarFormulario = () => {
    if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
      alert('Las contraseñas no coinciden');
      limpiarCampos();
      return false;
    }

    if (!username || !cedula || !password || !confirmPassword || !zona) {
      setErrorMessage('Por favor, complete todos los campos.');
      alert('Por favor, complete todos los campos.');
      return false;
    }

    setErrorMessage('');
    return true;
  };

  const limpiarCampos = () => {
    setUsername('');
    setCedula('');
    setPassword('');
    setConfirmPassword('');
    setZona(''); // Limpiar el campo de la zona también
  };

  const handleRegistroClick = () => {
    if (validarFormulario()) {
      // Crear un objeto con la información del usuario
      const userInfo = {
        username,
        cedula,
        password,
        confirmPassword,
        zona,
      };

      console.log(userInfo);

      // Realizar acciones adicionales para el registro

      // Pasar userInfo como estado en Navigate
      Navigate('/ConfirmacionRegistro', { state: { userInfo } });

      // Limpia los campos después del registro exitoso
      limpiarCampos();
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
          <div className="contenedor__zona">
            <label htmlFor="zona">Zona:</label>
            <select
              id="zona"
              value={zona}
              onChange={(e) => setZona(e.target.value)}
            >
              <option value="">Seleccione su zona</option>
              <option value="norte">Zona Norte</option>
              <option value="sur">Zona Sur</option>
              <option value="centro">Zona Centro</option>
            </select>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;


