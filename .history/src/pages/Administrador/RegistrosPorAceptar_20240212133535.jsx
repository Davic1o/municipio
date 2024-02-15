import React, { useEffect, useState } from 'react';

function RegistrosPorAceptar({ user }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) {
          throw new Error(`Error de red: ${response.statusText}`);
        }

        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []); // El segundo parámetro [] asegura que useEffect solo se ejecute una vez al montar el componente
    // Filtrar los datos por tipo de usuario (puedes cambiar 'Usuario' por el tipo deseado)
    const registrosPorTipo = data.filter((usuario) => usuario.estado === false);


  return (
    <div>
      <h2>Registros por Aceptar</h2>
      {/* Puedes usar 'data' en tu renderizado */}
      <table>
        <thead>
          <tr>
            <th>Nombre de Usaurio</th>
            <th>ID</th>
            <th>Cedula</th>
            <th>Password</th>
            <th>Tipo</th>
            <th>Zona</th>
            <th>Estado</th>
            <th>Opcion</th>
          </tr>
        </thead>
        <tbody>

      {registrosPorTipo.map((usuario, index) => (
             <tr key={index}>
              <td>{usuario._id}</td>
             <td>{usuario.username}</td>
             <td>{usuario.cedula}</td>
             <td>{usuario.password}</td>
             <td>{usuario.tipo}</td>
             <td>{usuario.zona}</td>
               <td>{usuario.estado? 'aceptado':'pendiente'}</td>
             
             <td><button>Aceptar</button><button>Rechazar</button></td>
           </tr>
        
        ))}
        </tbody>
        </table>
    </div>
  );
}

export default RegistrosPorAceptar;
