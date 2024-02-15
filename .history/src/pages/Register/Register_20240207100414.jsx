import React, { useState } from 'react';
import { FaUser, FaAddressCard } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { ImMap } from 'react-icons/im';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [cedula, setCedula] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [zona, setZona] = useState('');
  const [error, setError] = useState('');

  const validarFormulario = () => {
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      limpiarCampos();
      return false;
    }

    if (!username || !cedula || !password || !confirmPassword || !zona) {
      setError('Por favor, complete todos los campos.');
      return false;
    }

    if (cedula.length !== 10) {
      setError('La cédula debe tener 10 números.');
      setCedula('');
      return false;
    }

    return true;
  };

  const limpiarCampos = () => {
    setUsername('');
    setCedula('');
    setPassword('');
    setConfirmPassword('');
    setZona('');
  };

  const handleRegistroClick = async () => {
    if (validarFormulario()) {
      try {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            cedula,
            password,
            zona,
          }),
        });

        if (response.ok) {
          // Redirigir a la página de confirmación de registro
          navigate('/ConfirmacionRegistro');
          // Limpia los campos después del registro exitoso
          limpiarCampos();
        } else {
          // Manejar errores de la solicitud al servidor
          const errorMessage = await response.text();
          setError(`Error al registrar usuario: ${errorMessage}`);
        }
      } catch (error) {
        console.error('Error al registrar usuario:', error);
        setError('Error al registrar usuario. Consulta la consola para más detalles.');
      }
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
              maxLength={10}
              onChange={(e) => {
                const inputValue = e.target.value.replace(/\D/g, '').slice(0, 10);
                setCedula(inputValue);
              }}
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
            <ImMap className="icon__password" />
            <select
              id="zona"
              value={zona}
              onChange={(e) => setZona(e.target.value)}
            >
              <option className="primer__opcion" value="">
                Seleccione su zona
              </option>
              <option value="Norte">Zona Norte</option>
              <option value="Sur">Zona Sur</option>
              <option value="Centro">Zona Centro</option>
            </select>
          </div>
          {error && <p className="error__mensaje">{error}</p>}
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


