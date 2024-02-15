// Login.js
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      // Realizar la consulta a la API para obtener la lista de usuarios
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error(`Error de red: ${response.statusText}`);
      }

      const data = await response.json();

      // Verificar si el username y password coinciden con algún usuario
      const user = data.find(user => user.username === username && user.password === password);

      if (user) {
        // Redirigir a la página correspondiente según el tipo de usuario (admin, user, coordinador)
        if (user.username === 'admin') {
          navigate('/Administrador');
        } else if (user.username === 'user') {
          navigate('/Usuario');
        } else if (user.username === 'coordinador') {
          navigate('/Coordinador');
        }
      } else {
        // Mostrar mensaje de error si las credenciales no coinciden
        alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      alert('Error al obtener usuarios. Consulta la consola para más detalles.');
    }
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
              placeholder="Nombre de Usuario"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="contenedor__password">
            <RiLockPasswordFill className="icon__password" />
            <input
              type="password"
              className="inp__password"
              placeholder="Ingrese su password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="contenedor__recuerdame">
            <input type="checkbox" className="inp__recuerdame" />
            <label htmlFor="" className="lbl__recuerdame">
              Recuérdame
            </label>
          </div>
          <div className="contenedor__registrar">
            <Link to={'/Registro'}>
              <label htmlFor="" className="lbl__registrar">
                ¿No tienes una cuenta?
              </label>
            </Link>
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


