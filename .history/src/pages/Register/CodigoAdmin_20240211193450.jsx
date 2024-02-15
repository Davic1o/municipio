import React from 'react';

const CodigoAdmin = ({ codigo, setCodigo, isVisible }) => {
  return (
    isVisible && (
        <div className="contenedor__nombre">
        <label htmlFor="codigo">Código:</label>
        <input
          type="text"
          className="inp__nombre"
          id="codigo"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
      </div>
    )
  );
};

export default CodigoAdmin;
