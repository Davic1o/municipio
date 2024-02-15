import React  from 'react';
import useRegistroActions from '../../hooks/useRegistroActions';
import ListaUsuarios from '../../hooks/ListRegistros'

function RegistrosPorAceptar() {
  const datos= ListaUsuarios();


  const registrosFiltrados = datos.filter((usuario) => usuario.estado === false);

 const { handleEstadoN,handleEstado, handleAprobacionN} = useRegistroActions();

 const handleClickEstado = (userId) => {
  handleEstado(userId , registrosFiltrados);
};

const handleClickRechazar = (userId) => {
  handleAprobacionN(userId , registrosFiltrados);
  handleEstadoN(userId , registrosFiltrados);
};

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
            <th className='titulo__tabla'>Opciones</th>
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
              <td className='cuerpo__tabla'>{usuario.zona}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RegistrosPorAceptar;

