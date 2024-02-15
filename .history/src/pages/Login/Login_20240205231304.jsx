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
          {/* ... Código anterior ... */}
          <div className="contendor__ingresar">
            <button className="btn__ingresar" onClick={handleLogin}>Ingresar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


