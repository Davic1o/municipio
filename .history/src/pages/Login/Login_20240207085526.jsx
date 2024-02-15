import React, { useState, useEffect } from 'react';

const Login = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Función para obtener los usuarios desde el servidor
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    // Llamar a la función para obtener usuarios cuando el componente se monta
    fetchUsers();
  }, []); // El segundo parámetro [] indica que este efecto se ejecuta solo una vez al montar el componente

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Login;


