import { useState } from 'react';

const useRegistroActions = () => {
  const [data, setData] = useState([]);

  const handleAceptado = async (userId, componente, valor) => {
    try {
      // Encontrar el usuario correspondiente en los datos
      const userToUpdate = data.find((user) => user._id === userId);

     if (componente==='estado') {
         userToUpdate.estado = valor;
   
         // Realizar la solicitud PUT al servidor para actualizar el estado
         const response = await fetch(`/api/users/${userId}`, {
           method: 'PUT',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({ [componente]: valor }),
        });
        
     }

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

  return { handleAceptado, data, setData };
};

export default useRegistroActions;
