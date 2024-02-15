import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useHistory } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username === 'usuario1' && password === 'contrasenia1') {
      // Redirigir al componente 1
      history.push('/componente1');
    } else if (username === 'usuario2' && password === 'contrasenia2') {
      // Redirigir al componente 2
      history.push('/componente2');
    } else if (username === 'usuario3' && password === 'contrasenia3') {
      // Redirigir al componente 3
      history.push('/componente3');
    } else {
      // Mostrar un mensaje de error o manejar de otra manera
      console.log('Credenciales incorrectas');
    }
  };

  return (
    <div className="login__container">
      <div className="login__recuadro">
        <div className="login__formulario">
          <div className="contenedor__nombre">
            <FaUser className='icon__nombre' />
            <input
              type="text"
              className="inp__nombre"
              placeholder='NOMBRE DE USUARIO'
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="contenedor__password">
            <RiLockPasswordFill className='icon__password' />
            <input
              type="password"
              className="inp__password"
              placeholder='INGRESE SU PASSWORD'
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="contenedor__recuerdame">
            <input type="checkbox" className="inp__recuerdame" />
            <label htmlFor="" className="lbl__recuerdame">Recuérdame</label>
          </div>
          <div className="contenedor__registrar">
            <label htmlFor="" className="lbl__registrar">¿No tienes una cuenta?</label>
          </div>
          <div className="contendor__ingresar">
            <button className="btn__ingresar" onClick={handleLogin}>Ingresar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

