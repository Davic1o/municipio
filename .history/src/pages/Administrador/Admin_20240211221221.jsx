import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './admin.css';
import PanelLateral from '../../components/PanelLateral';
import RegistrosPorAceptar from './RegistrosPorAceptar';
import RegistrosRechazados from './RegistrosRechazados';
import AgregarCoordinador from './AgregarCoordinador';

function Admin() {
  const [user, setUser] = useState(null);


  const [contenidoDerecha, setContenidoDerecha] = useState(null);

  const handleItemClick = (opcion) => {
    // Aquí puedes definir la lógica para establecer el contenido derecho según la opción seleccionada
    switch (opcion) {
      case 'registrosPorAceptar':
        setContenidoDerecha(<RegistrosPorAceptar />);
        break;
      case 'registrosRechazados':
        setContenidoDerecha(<RegistrosRechazados />);
        break;
      case 'agregarCoordinador':
        setContenidoDerecha(<AgregarCoordinador />);
        break;
      default:
        setContenidoDerecha(null);
        break;
    }
  };


  

  return (
    <div className="admin__container">
      <div className="menu__lateral">
<PanelLateral onItemClick={handleItemClick} setUser={setUser} />


      </div>
      <div className="contenido__derecha">
        <h1 className="titulo__usuario">
          Bienvenido: Erik
        </h1>
        {contenidoDerecha}
      </div>
    </div>
  );
}

export default Admin