import React from 'react';
import { FaKey } from "react-icons/fa";

const CodigoAdmin = ({ codigo, setCodigo, isVisible }) => {
  return (
    isVisible && (
        <div className="contenedor__nombre">
        <FaKey className="icon__password" />
        <input
          type="text"
          className="inp__nombre"
          id="codigo"
          placeholder='Clave Secreta'
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
      </div>
    )
  );
};

export default CodigoAdmin;
