import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
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

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      // Redirigir al componente Administrador
      navigate('/Admin');
    } else if (username === 'user' && password === 'user') {
      // Redirigir al componente Usuario
      navigate('/Usuario');
    } else if (username === 'cor' && password === 'cor') {
      // Redirigir al componente Coordinador
      navigate('/Coordinador');
    } else {
      // Mostrar un mensaje de error o manejar de otra manera
      alert('Credenciales incorrectas');
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
              placeholder="NOMBRE DE USUARIO"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="contenedor__password">
            <RiLockPasswordFill className="icon__password" />
            <input
              type="password"
              className="inp__password"
              placeholder="INGRESE SU PASSWORD"
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



