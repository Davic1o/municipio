import React from 'react';
import { useNavigate } from 'react-router-dom';
import './panellateral.css';

function PanelLateral({ onItemClick, setUser }) {

  const handleLogout = () => {
    // Limpiar la información de sesión al hacer clic en "Cerrar Sesión"
    localStorage.removeItem('user');
    // Limpiar el estado
    setUser(null);
    // Redirigir al usuario a la página de inicio de sesión
    navigate('/');
  };

  return (
    <>
      <ul className='contenedor__menu__lateral'>
        <li><h3>Opciones</h3></li>
        <li onClick={() => onItemClick('registrosPorAceptar')}>Registros por aceptar</li>
        <li onClick={() => onItemClick('registrosRechazados')}>Registros rechazados</li>
        <li onClick={() => onItemClick('agregarCoordinador')}>Agregar Coordinador</li>
        <li>
          <div className="cerrar__sesion" onClick={handleLogout}>
            cerrar sesión
          </div>
        </li>
      </ul>
    </>
  );
}

export default PanelLateral;
