import React from 'react';
import { useLocation } from 'react-router-dom';
import './confirmacionregistro.css'

function ConfirmacionRegistro() {
  // Utiliza useLocation para acceder al estado enviado por Navigate
  const location = useLocation();
  const { userInfo } = location.state || {};
  
  // Definir la variable Cordinador
  let Cordinador = "";

  // Verificar si userInfo.zona es "Norte" y asignar el coordinador correspondiente
  if (userInfo && userInfo.zona === "Norte") {
    Cordinador = "Erik Ortiz";
  }
  if (userInfo && userInfo.zona === "Sur") {
    Cordinador = "Ibeth Sotalin";
  }
  if (userInfo && userInfo.zona === "Centro") {
    Cordinador = "Katerin Oña";
  }

  return (
    <>

    <div className="contenedor__confirmacion">
      <h2 className='titulo__confirmacion'>Confirmación de Registro</h2>
      {userInfo && (
        <div className='datos__confirmacion'>
          <div className="nombre__confirmacion">
          <p>Nombre de usuario: {userInfo.username}</p>
          </div>
          <div className="cedula__confirmacion">
          <p>Cédula: {userInfo.cedula}</p>
          </div>
          <p>Coordinador: {Cordinador}</p>
          <p>Zona: {userInfo.zona}</p>
        </div>
      )}

    </div>
    </>
  );
}

export default ConfirmacionRegistro;
