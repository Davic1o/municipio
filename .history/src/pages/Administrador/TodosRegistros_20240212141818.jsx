import React, { useEffect, useState } from 'react';

function TodosRegistros() {
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
  }, []);
  return (
    <div>
      <h2>Registros por Aceptar</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre de Usuario</th>
            <th>Cedula</th>
            <th>Password</th>
            <th>Tipo</th>
            <th>Zona</th>
            <th>Estado</th>
            <th>Opción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((usuario) => (
            <tr key={usuario._id}>
              <td>{usuario._id}</td>
              <td>{usuario.username}</td>
              <td>{usuario.cedula}</td>
              <td>{usuario.password}</td>
              <td>{usuario.tipo}</td>
              <td>{usuario.zona}</td>
              <td>{usuario.estado ? 'aceptado' : 'pendiente'}</td>
              <td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodosRegistros;

