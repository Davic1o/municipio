import React  from 'react';
import useRegistroActions from '../../hooks/useRegistroActions';
import ListaUsuarios from '../../hooks/ListRegistros'

function AgregarCoordinador() {
  const datos= ListaUsuarios();


  const registrosFiltrados = datos.filter((usuario) => usuario.estado === true);


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
              <td className='cuerpo__tabla'>    <select>      <option className="primer__opcion" value="">
            Seleccione su zona
          </option>
          <option value="Norte">Zona Norte</option>
          <option value="Sur">Zona Sur</option>
          <option value="Centro">Zona Centro</option>
        </select></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AgregarCoordinador;
