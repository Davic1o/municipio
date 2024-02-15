import React from 'react';
import ListaUsuarios from '../../hooks/ListRegistros'
import './tablas.css'

function RegistrosRechazados() {

    const datos= ListaUsuarios();


  const registrosFiltrados = datos.filter((usuario) => usuario.aprobacion === false);

  return (
    <div>
      <h2>Registros Rechazados</h2>
      <table className='tabla__administrativa'>
        <thead>
          <tr>
            <th className='titulo__tabla'>Nombre de Usuario</th>
            <th className='titulo__tabla'>Cedula</th>
            <th className='titulo__tabla'>Password</th>
            <th className='titulo__tabla'>Tipo</th>
            <th className='titulo__tabla'>Zona</th>
            <th className='titulo__tabla'>Estado</th>
            <th className='titulo__tabla'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {registrosFiltrados.map((usuario) => (
            <tr className='fila__tabla' key={usuario._id}>
              <td className='cuerpo__tabla'>{usuario.username}</td>
              <td className='cuerpo__tabla'>{usuario.cedula}</td>
              <td className='cuerpo__tabla'>{usuario.password}</td>
              <td className='cuerpo__tabla'>{usuario.tipo}</td>
              <td className='cuerpo__tabla'>{usuario.zona}</td>
              <td className='cuerpo__tabla'>{usuario.estado ? 'aceptado' : 'pendiente'}</td>
              <td className='cuerpo__tabla'>{usuario.estado ? 'aceptado' : 'pendiente'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RegistrosRechazados;
