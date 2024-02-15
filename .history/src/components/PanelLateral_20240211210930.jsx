import React from 'react'
import './panellateral.css'

function PanelLateral({ onItemClick }) {
  return (
    <>
<ul className='contenedor__menu__lateral'>
      <li><h3>Opciones</h3></li>
      <li onClick={() => onItemClick('registrosPorAceptar')}>Registros por aceptar</li>
      <li onClick={() => onItemClick('registrosRechazados')}>Registros rechazados</li>
      <li onClick={() => onItemClick('agregarCoordinador')}>Agregar Coordinador</li>
      <div className="cerrar__sesion">
          cerrar sesion
        </div>
    </ul>
    </>
  )
}

export default PanelLateral