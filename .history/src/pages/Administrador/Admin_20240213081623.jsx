import React, { useEffect, useState } from 'react';
import './admin.css';
import { useNavigate } from 'react-router-dom';
import PanelLateral from '../../components/PanelLateralAdmin';
import RegistrosPorAceptar from './RegistrosPorAceptar'; // Importa el componente correspondiente
import RegistrosRechazados from './RegistrosRechazados'; // Importa el componente correspondiente
import AgregarCoordinador from './AgregarCoordinador'; // Importa el componente correspondiente
import TodosRegistros from './TodosRegistros'; // Importa el componente correspondiente
import RegistrosAceptados from './RegistrosAceptados';

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
      if (parsedUser.tipo!=='Administrador') {
        localStorage.removeItem('user');
        navigate('/');
      }
    } else {
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
          <div className="Dashboard" style={{ display: 'none' }}>

            <p>Ningun Usuario</p>
          {seccionActual === 'TodosLosregistros' && <TodosRegistros/>}
          {seccionActual === 'registrosPorAceptar' && <RegistrosPorAceptar />}
          {seccionActual === 'registrosRechazados' && <RegistrosRechazados />}
          {seccionActual === 'agregarCoordinador' && <AgregarCoordinador />}
          {seccionActual === 'registrosAceptados' && <RegistrosAceptados/>}
          </div>
        )}

        {/* Renderiza el componente correspondiente según la sección actual */}
      </div>
    </div>
  );
}

export default Admin;


