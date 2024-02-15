import React, { useState } from 'react';
import './login.css';  // Asegúrate de tener un archivo de estilo CSS para tu componente

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [selectedProfile, setSelectedProfile] = useState('');

  const handleLogin = () => {
    // Aquí puedes realizar la lógica de autenticación según el perfil seleccionado
    console.log(`Iniciando sesión con ${selectedProfile} - Usuario: ${username}, Contraseña: ${password}`);
    // Puedes implementar la lógica de autenticación con API, servicios, etc.
  };

  return (
    <div className="login-container">
      <h2>Inicio de Sesión</h2>
      <select value={selectedProfile} onChange={(e) => setSelectedProfile(e.target.value)}>
        <option value="">Seleccionar perfil</option>
        <option value="perfil1">Perfil 1</option>
        <option value="perfil2">Perfil 2</option>
        <option value="perfil3">Perfil 3</option>
      </select>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default LoginComponent;
