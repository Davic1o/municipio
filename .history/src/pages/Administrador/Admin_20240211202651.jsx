import React, { useState } from 'react';
import './admin.css';
import PanelLateral from '../../components/PanelLateral';
import RegistrosPorAceptar from './RegistrosPorAceptar';
import RegistrosRechazados from './RegistrosRechazados';

function Admin() {
  return (
    <>
    <div className="admin__container">
      <div className="menu__lateral">
    <PanelLateral/>
      </div>
    </div>
    </>
  )
}

export default Admin