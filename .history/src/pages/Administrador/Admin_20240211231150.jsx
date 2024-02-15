import React from 'react';
import './admin.css';

function Admin() {
  console.log('Renderizando componente Admin...');

  return (
    <div className="admin__container">
      <div className="contenido__derecho">
        <h1 className="titulo__usuario">Bienvenido al panel de administrador</h1>
        {/* Puedes agregar cualquier contenido específico del panel de administrador aquí */}
      </div>
    </div>
  );
}

export default Admin;
