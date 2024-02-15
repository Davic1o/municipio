import React from 'react'
import './panellateral.css'
import { useNavigate } from 'react-router-dom';

function PanelLateralAdmin({ onItemClick }) {

const  navigate = useNavigate();



  const logout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };
  return (
    <>
<ul className='contenedor__menu__lateral'>
      <li><h3>Opciones</h3></li>



      <li onClick={() => onItemClick('AdministrarUser')}>TActualizar mi Perfil</li>
      <li onClick={() => onItemClick('UEscogerRonda')}>Registros por aceptar</li>
      <li>

      <div className="cerrar__sesion" onClick={logout}>
          cerrar sesion
        </div>
      </li>
    </ul>
    </>
  )
}

export default PanelLateralAdmin