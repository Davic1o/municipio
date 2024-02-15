import React, { useEffect, useState } from 'react';
import ListaUsuarios from '../../hooks/ListRegistros'

function TodosRegistros() {
 const data = ListaUsuarios();


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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodosRegistros;

