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
        // Almacenar información necesaria en el localStorage
        localStorage.setItem('user', JSON.stringify(user));
        if (user.tipo==='Administrador') {
          navigate('/Administrador');
          
        }if(user.tipo==='Usuario'){
          navigate('/Usuario');
        }
      }if(user.tipo==='Coordinador'){
        navigate('/Coordinador');
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
          <div className="contenedor__nombre">
            <FaUser className="icon__nombre" />
            <input
              type="text"
              className="inp__nombre"
              placeholder="Nombre de Usuario"
              ref={usernameRef}
            />
          </div>
          <div className="contenedor__password">
            <RiLockPasswordFill className="icon__password" />
            <input
              type="password"
              className="inp__password"
              placeholder="Ingrese su password"
              ref={passwordRef}
            />
          </div>
          <div className="contenedor__recuerdame">
            <input type="checkbox" className="inp__recuerdame" />
            <label htmlFor="" className="lbl__recuerdame">
              Recuérdame
            </label>
          </div>
          <div className="contenedor__registrar">
            <Link to="/Registro">
              <label htmlFor="" className="lbl__registrar">
                ¿No tienes una cuenta?
              </label>
            </Link>
          </div>
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









