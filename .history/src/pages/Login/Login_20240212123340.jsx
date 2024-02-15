import React, { useRef } from 'react';
import { FaUser } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Lógica de autenticación
      const response = await fetch('/api/users');
      if (!response.ok) {
        throw new Error(`Error de red: ${response.statusText}`);
      }

      const data = await response.json();
      const user = data.find(
        (user) =>
          user.username === usernameRef.current.value && user.password === passwordRef.current.value
      );

      if (user) {
        // Guardar información necesaria en el localStorage
        localStorage.setItem('user', JSON.stringify(user));
        // Redirigir al usuario a la página de inicio después del login
        navigate('/home');
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
        <form onSubmit={handleLogin} className="login__formulario">
          {/* Resto del código */}
          <div className="contendor__ingresar">
            <button type="submit" className="btn__ingresar">
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;








