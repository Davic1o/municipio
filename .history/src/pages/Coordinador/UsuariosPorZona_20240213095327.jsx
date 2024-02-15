import React  from 'react';
import useRegistroActions from '../../hooks/useRegistroActions';
import ListaUsuarios from '../../hooks/ListRegistros'

function UsuariosPorZona({user}) {

  const zona = user.zona;
  const datos= ListaUsuarios();
  const { handleCoord} = useRegistroActions();

  const registrosFiltrados = datos.filter((usuario) => usuario.estado === true && usuario.tipo ==='Usuario' && usuario.zona === zona);


  const handleClickCoordinador = (userId) => {
    handleCoord(userId , registrosFiltrados);
 };



  return (
    <div>
      <h2>Agregar Coordinador</h2>
      <table className='tabla__administrativa'>
        <thead>
          <tr>
            <th className='titulo__tabla'>Nombre de Usuario</th>
            <th className='titulo__tabla'>Cedula</th>
            <th className='titulo__tabla'>Password</th>
            <th className='titulo__tabla'>Tipo</th>
            <th className='titulo__tabla'>Zona</th>
            <th className='titulo__tabla'>Estado</th>
            <th className='titulo__tabla'>Opcion</th>
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
              <td className='cuerpo__tabla botones__tabla'>
              <button className="boton__aceptar boton__cordinador" onClick={() => handleClickCoordinador(usuario._id)}>Hacer Coordinador</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default UsuariosPorZona