import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

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
      // Realizar la consulta a la API para obtener la lista de usuarios
      const response = await fetch('/api/users');
      
      if (!response.ok) {
        throw new Error(`Error de red: ${response.statusText}`);
      }

      const data = await response.json();

      // Verificar si el username y password coinciden con algún usuario
      const user = data.find(user => user.username === username && user.password === password);

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));

        // Redirigir a la página correspondiente según el tipo de usuario
        if (user.tipo === 'Administrador') {
          navigate('/Administrador');
        } else if (user.tipo === 'Usuario') {
          navigate('/Usuario');
        } else if (user.tipo === 'Coordinador') {
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
          {/* ... restante del código ... */}
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





