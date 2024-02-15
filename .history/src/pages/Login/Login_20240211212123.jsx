// Login.js
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

// ... (importaciones y código anterior)

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleLogin = async () => {
    try {
      // ... (código de manejo de login)
      
      if (user) {
        if (rememberMe) {
          localStorage.setItem('user', JSON.stringify(user));
        }

        // Redirigir a la página correspondiente según el tipo de usuario
        if (user.tipo === 'Administrador') {
          navigate('/Administrador');
        } else if (user.tipo === 'Usuario') {
          navigate('/Usuario');
        } else if (user.tipo === 'Coordinador') {
          navigate('/Coordinador');
        }
      } else {
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
          {/* ... (código de JSX anterior) */}
          <div className="contenedor__recuerdame">
            <input
              type="checkbox"
              className="inp__recuerdame"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label htmlFor="" className="lbl__recuerdame">
              Recuérdame
            </label>
          </div>
          {/* ... (resto del código JSX) */}
        </div>
      </div>
    </div>
  );
};

export default Login;




