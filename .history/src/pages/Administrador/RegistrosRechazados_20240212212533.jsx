import React from 'react';
import ListaUsuarios from '../../hooks/ListRegistros'

function RegistrosRechazados() {

    const datos= ListaUsuarios();


  const registrosFiltrados = datos.filter((usuario) => usuario.aprobacion === false);

  return (
    <div>
      <h2>Registros Rechazados</h2>
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
          {registrosFiltrados.map((usuario) => (
            <tr key={usuario._id}>
              <td>{usuario._id}</td>
              <td>{usuario.username}</td>
              <td>{usuario.cedula}</td>
              <td>{usuario.password}</td>
              <td>{usuario.tipo}</td>
              <td>{usuario.zona}</td>
              <td>{usuario.aprobacion ? 'Rechazado' : 'Rechazado'}</td>
              <td>
                <button onClick={() => handleClick(usuario._id)}>
                  Aceptar
                </button>
                <button >
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

export default RegistrosRechazados;
