import React, { useEffect, useState } from 'react';
import './admin.css';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Recuperar la información del localStorage

    const storedUser = localStorage.getItem('user');
if (storeUser===null) {
}
    // Parsear la información si existe
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserData(parsedUser);
    }
  }, []); // El segundo argumento [] asegura que este efecto solo se ejecute una vez al montar el componente

  return (
    <div className="admin__container">
      <div className="contenido__derecho">
        {userData ? (
          <>
            <h1 className="titulo__usuario">Bienvenido al panel de administrador</h1>
            <p>Usuario: {userData.username}</p>
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

