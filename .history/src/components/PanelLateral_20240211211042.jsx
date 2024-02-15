import React from 'react'
import './panellateral.css'

function PanelLateral({ onItemClick }) {

  const handleLogout = () => {
    // Limpiar la información de sesión al hacer clic en "Cerrar Sesión"
    localStorage.removeItem('user');
    // Redirigir al usuario a la página de inicio de sesión o a la página principal
    window.location.href = '/';
  };

  return (
    <>
<ul className='contenedor__menu__lateral'>
      <li><h3>Opciones</h3></li>
      <li onClick={() => onItemClick('registrosPorAceptar')}>Registros por aceptar</li>
      <li onClick={() => onItemClick('registrosRechazados')}>Registros rechazados</li>
      <li onClick={() => onItemClick('agregarCoordinador')}>Agregar Coordinador</li>
      <li>

      <div className="cerrar__sesion" onClick={handleLogout} >
          cerrar sesion
        </div>
      </li>
    </ul>
    </>
  )
}

export default PanelLateral