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

  const handleEstadoN = async (userId, data) => {
    try {
      // Encontrar el usuario correspondiente en los datos
      const userToUpdate = data.find((user) => user._id === userId);

      // Cambiar el estado del usuario
      userToUpdate.estado = false;

      // Realizar la solicitud PUT al servidor para actualizar el estado
      const response = await fetch(`/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ estado: false }),
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

  const handleAprobacionN = async (userId, data) => {
    try {
      // Encontrar el usuario correspondiente en los datos
      const userToUpdate = data.find((user) => user._id === userId);

      // Cambiar el estado del usuario
      userToUpdate.aprobacion = false;

      // Realizar la solicitud PUT al servidor para actualizar el estado
      const response = await fetch(`/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ aprobacion: false }),
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

  const handleCoord = async (userId, data) => {
    try {
      // Encontrar el usuario correspondiente en los datos
      const userToUpdate = data.find((user) => user._id === userId);

      // Cambiar el tipo del usuario a Coordinador
      userToUpdate.tipo = 'Coordinador';

      // Realizar la solicitud PUT al servidor para actualizar el tipo del usuario
      const response = await fetch(`/api/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tipo: 'Coordinador' }),
      });

      if (!response.ok) {
        throw new Error(`Error al actualizar el tipo del usuario: ${response.statusText}`);
      }

      // Actualizar los datos locales solo con el usuario modificado
      setData((prevData) =>
        prevData.map((user) => (user._id === userId ? userToUpdate : user))
      );
    } catch (error) {
      console.error('Error al cambiar el tipo del usuario:', error);
    }
  };

  return { handleEstado, handleAprobacion, handleEstadoN, handleAprobacionN, handleCoord, data, setData };
};

export default useRegistroActions;
