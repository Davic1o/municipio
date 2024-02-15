import React from 'react';
import ListaUsuarios from '../../hooks/ListRegistros'
import './tablas.css'

function TodosRegistros() {
 const data = ListaUsuarios();


  return (
    <div>
      <h2>Registros por Aceptar</h2>
      <table className='tabla__administrativa'>
        <thead>
          <tr>
            <th className='titulo__tabla'>Nombre de Usuario</th>
            <th className='titulo__tabla'>Cedula</th>
            <th className='titulo__tabla'>Password</th>
            <th className='titulo__tabla'>Tipo</th>
            <th className='titulo__tabla'>Zona</th>
            <th className='titulo__tabla'>Estado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((usuario) => (
            <tr key={usuario._id}>
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

