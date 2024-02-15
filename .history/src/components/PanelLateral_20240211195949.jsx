import React from 'react'
import './panellateral.css'

function PanelLateral() {
  return (
    <>
    <ul className='contenedor__menu__lateral'>
        <li><h3>Opciones</h3></li>
        <li>Registros por aceptar</li>
        <li>Registros rechazados</li>
        <li>Agregar Coordinador</li>
        <li>Agregar Administrador</li>
    </ul>
    </>
  )
}

export default PanelLateral