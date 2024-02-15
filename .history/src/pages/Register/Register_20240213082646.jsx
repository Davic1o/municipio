import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegistroForm from './RegistroForm';
import CodigoAdmin from './CodigoAdmin';
import CheckboxAdmin from './CheckboxAdmin';
import ErrorMensaje from './ErrorMensaje';
import './register.css';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [cedula, setCedula] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [zona, setZona] = useState('');
  const [codigo, setCodigo] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
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
    setCodigo('');
    setIsAdmin(false);
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
            codigo,
            tipo: isAdmin ? 'Administrador' : 'Usuario',

          }),
        });

        if (response.ok) {
          const userInfo = {
            username,
            cedula,
            zona,
            isAdmin,
          };
          // Redirigir a la página de confirmación de registro
          navigate('/ConfirmacionRegistro', { state: { userInfo } });
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
        <RegistroForm
          username={username}
          setUsername={setUsername}
          cedula={cedula}
          setCedula={setCedula}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          zona={zona}
          setZona={setZona}
        />
        <CheckboxAdmin isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
        <CodigoAdmin codigo={codigo} setCodigo={setCodigo} isVisible={isAdmin} />
        {error && <ErrorMensaje error={error} />}
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
  );
};

export default Register;
