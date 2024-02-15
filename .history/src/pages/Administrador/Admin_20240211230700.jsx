import React, { useState, useEffect } from 'react';
import './admin.css';


function Admin() {
  console.log('Renderizando componente Admin...');
 

  };

  return (
    <div className="admin__container">
      <div className="menu__lateral">
      
      </div>
      <div className="contenido__derecha">
        <h1 className="titulo__usuario">
          {storedUser ? `Bienvenido: ${storedUser.nombre}` : 'Bienvenido'}
        </h1>
        {contenidoDerecha}
      </div>
    </div>
  );
}

export default Admin;
