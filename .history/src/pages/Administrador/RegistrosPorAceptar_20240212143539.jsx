import React, { useEffect, useState } from 'react';
import ListaUsuarios from '../../hooks/ListRegistros'
import useRegistroActions from '../../hooks/useRegistroActions'

function RegistrosPorAceptar() {

  const datos= ListaUsuarios();
  const { handleAceptado, data } = useRegistroActions();

  const registrosFiltrados = datos.filter((usuario) => usuario.estado === false);
  const handleAceptadoClick = (userId) => {
    handleAceptado(userId);
  };




  return (
    <div>
      <h2>Registros por Aceptar</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre de Usuario</th>
            <th>Cedula</th>
            <th>Password</th>
            <th>Tipo</th>
            <th>Zona</th>
            <th>Estado</th>
            <th>Opción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((usuario) => (
            <tr key={usuario._id}>
              <td>{usuario._id}</td>
              <td>{usuario.username}</td>
              <td>{usuario.cedula}</td>
              <td>{usuario.password}</td>
              <td>{usuario.tipo}</td>
              <td>{usuario.zona}</td>
              <td>{usuario.estado ? 'aceptado' : 'pendiente'}</td>
              <td>
                <button onClick={() => handleAceptadoClick(usuario._id)}>
                  Aceptar
                </button>
                <button onClick={() => handleRechazado(usuario._id)}>
                  Rechazado
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RegistrosPorAceptar;

