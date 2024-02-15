import React, { useState, useEffect } from 'react';
import './admin.css';
import PanelLateral from '../../components/PanelLateral';
import RegistrosPorAceptar from './RegistrosPorAceptar';
import RegistrosRechazados from './RegistrosRechazados';
import AgregarCoordinador from './AgregarCoordinador';

function Admin() {
  console.log('Renderizando componente Admin...');
  const [contenidoDerecha, setContenidoDerecha] = useState(null);
  const [storedUser, setStoredUser] = useState(null);

  useEffect(() => {
    // Obtener información del usuario desde localStorage al cargar el componente
    const user = JSON.parse(localStorage.getItem('user')) || null;
    setStoredUser(user);
    setContenidoDerecha(null); // Establecer el contenido a null al inicio
  }, []);

  const handleItemClick = (opcion) => {
    // Obtener información del usuario desde localStorage al hacer clic en una opción
    const user = JSON.parse(localStorage.getItem('user')) || null;
    setStoredUser(user);

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
      
      </div>
      <div className="contenido__derecha">
        <h1 className="titulo__usuario">
          {storedUser ? `Bienvenido: ${storedUser.nombre}` : 'Bienvenido'}
        </h1>
        {contenidoDerecha}
      </div>
    </div>
  );
}

export default Admin;
