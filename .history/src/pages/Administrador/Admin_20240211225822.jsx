import React, { useState, useEffect } from 'react';
import './admin.css';
import PanelLateral from '../../components/PanelLateral';
import RegistrosPorAceptar from './RegistrosPorAceptar';
import RegistrosRechazados from './RegistrosRechazados';
import AgregarCoordinador from './AgregarCoordinador';

function Admin() {
  const [contenidoDerecha, setContenidoDerecha] = useState(null);

  useEffect(() => {
    // Obtener información del usuario desde localStorage al cargar el componente
    const storedUser = JSON.parse(localStorage.getItem('user')) || null;
    setContenidoDerecha(null); // Establecer el contenido a null al inicio
  }, []);

  const handleItemClick = (opcion) => {
    // Obtener información del usuario desde localStorage al hacer clic en una opción
    const storedUser = JSON.parse(localStorage.getItem('user')) || null;

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
        <PanelLateral onItemClick={handleItemClick} />
      </div>
      <div className="contenido__derecha">
        <h1 className="titulo__usuario">
          {contenidoDerecha ? `Bienvenido: ${storedUser.nombre}` : 'Bienvenido'}
        </h1>
        {contenidoDerecha}
      </div>
    </div>
  );
}

export default Admin;
