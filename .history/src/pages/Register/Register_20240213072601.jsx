import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegistroForm from './RegistroForm';
import CodigoAdmin from './CodigoAdmin';
import CheckboxAdmin from './CheckboxAdmin';
import ErrorMensaje from './ErrorMensaje';
import './register.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    cedula: '',
    password: '',
    confirmPassword: '',
    zona: '',
    codigo: '',
    isAdmin: false,
  });
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
    setFormData({
      username: '',
      cedula: '',
      password: '',
      confirmPassword: '',
      zona: '',
      codigo: '',
      isAdmin: false,
    });
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
            ...formData,
            tipo: formData.isAdmin ? 'Administrador' : 'Usuario',
          }),
        });

        if (response.ok) {
          const userInfo = {
            username: formData.username,
            cedula: formData.cedula,
            zona: formData.zona,
            isAdmin: formData.isAdmin,
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="login__container">
      <div className="register__recuadro">
        <RegistroForm
          formData={formData}
          handleInputChange={handleInputChange}
        />
        <CheckboxAdmin isAdmin={formData.isAdmin} handleInputChange={handleInputChange} />
        <CodigoAdmin codigo={formData.codigo} handleInputChange={handleInputChange} isVisible={formData.isAdmin} />
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