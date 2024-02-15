import React, { useEffect, useState } from 'react';

function RegistrosPorAceptar() {
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

  const handleStateChange = async (userId) => {
    try {
      // Encontrar el usuario correspondiente en los datos
      const userToUpdate = data.find((user) => user._id === userId);

      // Cambiar el estado del usuario
      userToUpdate.estado = !userToUpdate.estado;

      // Realizar la solicitud PUT al servidor para actualizar el estado
      const response = await fetch(`/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estado: userToUpdate.estado }),
      });

      if (!response.ok) {
        throw new Error(`Error al actualizar el estado: ${response.statusText}`);
      }

      // Actualizar los datos locales con el usuario modificado
      setData((prevData) =>
        prevData.map((user) => (user._id === userId ? userToUpdate : user))
      );
    } catch (error) {
      console.error('Error al cambiar el estado del usuario:', error);
    }
  };


  const handleRechazado = async (userId) => {
    try {
      // Encontrar el usuario correspondiente en los datos
      const userToUpdate = data.find((user) => user._id === userId);

      // Cambiar el estado del usuario
      userToUpdate.aprobacion = !userToUpdate.aprobacion;

      // Realizar la solicitud PUT al servidor para actualizar el estado
      const response = await fetch(`/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estado: userToUpdate.estado }),
      });

      if (!response.ok) {
        throw new Error(`Error al actualizar el estado: ${response.statusText}`);
      }

      // Actualizar los datos locales con el usuario modificado
      setData((prevData) =>
        prevData.map((user) => (user._id === userId ? userToUpdate : user))
      );
    } catch (error) {
      console.error('Error al cambiar el estado del usuario:', error);
    }
  };

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
                <button onClick={() => handleStateChange(usuario._id)}>
                  Aceptar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RegistrosPorAceptar;

