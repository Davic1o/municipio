import React, { useEffect, useState } from 'react';
import './admin.css';
import { useNavigate } from 'react-router-dom';
import PanelLateral from '../../components/PanelLateral';
import RegistrosPorAceptar from './RegistrosPorAceptar'; // Importa el componente correspondiente
import RegistrosRechazados from './RegistrosRechazados'; // Importa el componente correspondiente
import AgregarCoordinador from './AgregarCoordinador'; // Importa el componente correspondiente

function Admin() {
  const [userData, setUserData] = useState(null);
  const [seccionActual, setSeccionActual] = useState('bienvenida'); // Estado para rastrear la sección actual
  const navigate = useNavigate();

  useEffect(() => {
    // Recuperar la información del localStorage
    const storedUser = localStorage.getItem('user');

    // Parsear la información si existe
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserData(parsedUser);
    } else {
      navigate('/');
    }
  }, [navigate]);

  // Función para cambiar la sección actual
  const cambiarSeccion = (nuevaSeccion) => {
    setSeccionActual(nuevaSeccion);
  };

  return (
    <div className="admin__container">
      <div className="menu__lateral">
        <PanelLateral onItemClick={cambiarSeccion} />
      </div>

      <div className="contenido__derecho">
        {userData ? (
          <>
            <h1 className="titulo__usuario">Bienvenido Usuario: {userData.username}</h1>
            {/* Puedes mostrar más información del usuario según tu estructura de datos */}
          </>
        ) : (
          <p>No hay información de usuario almacenada en localStorage.</p>
        )}

        {/* Renderiza el componente correspondiente según la sección actual */}
        {seccionActual === 'TodosLosregistros' && <TodosRegistros/>}
        {seccionActual === 'registrosPorAceptar' && <RegistrosPorAceptar />}
        {seccionActual === 'registrosRechazados' && <RegistrosRechazados />}
        {seccionActual === 'agregarCoordinador' && <AgregarCoordinador />}
      </div>
    </div>
  );
}

export default Admin;


