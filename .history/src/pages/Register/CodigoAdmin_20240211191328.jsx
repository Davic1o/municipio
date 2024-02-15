import React from 'react';

const CodigoAdmin = ({ codigo, setCodigo, isVisible }) => {
  return (
    isVisible && (
      <div className="contenedor__codigo">
        <label htmlFor="codigo">Código:</label>
        <input
          type="text"
          id="codigo"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
      </div>
    )
  );
};

export default CodigoAdmin;
