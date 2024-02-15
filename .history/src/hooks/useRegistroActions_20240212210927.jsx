import { useState } from 'react';

const useRegistroActions = () => {
  const [data, setData] = useState([]);

  const handleEstado = async (userId, data) => {
    try {
      // Encontrar el usuario correspondiente en los datos
      const userToUpdate = data.find((user) => user._id === userId);

      // Cambiar el estado del usuario
      userToUpdate.estado = true;

      // Realizar la solicitud PUT al servidor para actualizar el estado
      const response = await fetch(`/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estado: true }),
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

  const handleAprobacion = async (userId, data) => {
    try {
      // Encontrar el usuario correspondiente en los datos
      const userToUpdate = data.find((user) => user._id === userId);

      // Cambiar el estado del usuario
      userToUpdate.aprobacion = true;

      // Realizar la solicitud PUT al servidor para actualizar el estado
      const response = await fetch(`/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ aprobacion: true }),
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

  return { handleEstado, handleAprobacion, data, setData };
};

export default useRegistroActions;
