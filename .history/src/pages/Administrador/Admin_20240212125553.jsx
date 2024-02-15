import React, { useEffect, useState } from 'react';
import './admin.css';
import { useNavigate } from 'react-router-dom';
import PanelLateral from '../../components/PanelLateral';

function Admin() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/users');

        if (!response.ok) {
          throw new Error(`Error de red: ${response.statusText}`);
        }

        const data = await response.json();

        // Recuperar la información del localStorage
        const storedUser = localStorage.getItem('user');

        // Parsear la información si existe
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);

          // Verificar si el usuario existe en los datos recuperados
          const userExists = data.some(
            (user) => user.username === parsedUser.username && user.id === parsedUser.id
          );

          if (userExists) {
            setUserData(parsedUser);
          } else {
            // Si el usuario no existe en los datos, redirigir al inicio de sesión
            localStorage.removeItem('user');
            navigate('/');
          }
        } else {
          // Si no hay información en localStorage, redirigir al inicio de sesión
          navigate('/');
        }
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
        alert('Error al obtener usuarios. Consulta la consola para más detalles.');
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div className="admin__container">
      <div className="menu__lateral">
        <PanelLateral />
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
      </div>
    </div>
  );
}

export default Admin;

