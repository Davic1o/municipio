import React, { useState } from 'react';
import './admin.css';
import PanelLateral from '../../components/PanelLateral';
import RegistrosPorAceptar from './RegistrosPorAceptar';
import RegistrosRechazados from './RegistrosRechazados';
import AgregarCoordinador from './AgregarCoordinador';

function Admin() {


  const [contenidoDerecha, setContenidoDerecha] = useState(null);
  const [user, setUser] = useState(null);

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



  useEffect(() => {
    // Verificar si hay información de sesión en localStorage y actualizar el estado
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser !== null) {
      setUser(storedUser);
    }
  }, []); 

  return (
    <div className="admin__container">
      <div className="menu__lateral">
        <PanelLateral onItemClick={handleItemClick} />

      </div>
      <div className="contenido__derecha">
        <h1 className="titulo__usuario">
          Bienvenido: 
        </h1>
        {contenidoDerecha}
      </div>
    </div>
  );
}

export default Admin