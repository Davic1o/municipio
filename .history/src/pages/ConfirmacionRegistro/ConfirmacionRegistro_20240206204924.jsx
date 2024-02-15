import React from 'react';
import { useLocation } from 'react-router-dom';

function ConfirmacionRegistro() {
  // Utiliza useLocation para acceder al estado enviado por Navigate
  const location = useLocation();
  const { userInfo } = location.state || {};

  return (
    <>
      <h2>Confirmación de Registro</h2>
      {userInfo && (
        <div>
          <p>Nombre de usuario: {userInfo.username}</p>
          <p>Cédula: {userInfo.cedula}</p>
          <p>zona: {userInfo.zona}</p>

         
        </div>
      )}
    </>
  );
}

export default ConfirmacionRegistro;
