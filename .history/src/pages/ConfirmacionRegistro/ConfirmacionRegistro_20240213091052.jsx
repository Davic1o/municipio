import React from 'react';
import { MdArrowBack } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import './confirmacionregistro.css'
import Footer from '../../components/Footer';

function ConfirmacionRegistro() {
  // Utiliza useLocation para acceder al estado enviado por Navigate
  const location = useLocation();
  const { userInfo } = location.state || {};
  
  // Definir la variable Cordinador
  let Cordinador = "Pendiente de Asignacion";

  // Verificar si userInfo.zona es "Norte" y asignar el coordinador correspondiente


  return (
    <>

    <div className="contenedor__confirmacion">
      <h2 className='titulo__confirmacion'>Confirmación de Registro</h2>
      {userInfo && (
        <div className='datos__confirmacion'>
          <div className="datos__reg nombre__confirmacion">
            
          <p><span>Nombre de usuario:</span> {userInfo.username}</p>
          </div>
          <div className="datos__reg cedula__confirmacion">
          <p><span>Cédula:</span> {userInfo.cedula}</p>
          </div>
          <div className="datos__reg coordinador__confirmacion">
          <p><span>Coordinador:</span> {Cordinador}</p>
          </div>
          <div className="datos__reg zona__confirmacion">
          <p><span>Zona:</span> {userInfo.zona}</p>
          </div>
          <Link to={'/'}>
          <div className="datos__reg zona__confirmacion">
          <MdArrowBack  className='icono__atras'/>
          </div>
          </Link>
        </div>
         
      )}
       <div >
          <Footer/>
          </div>
    </div>
    </>
  );
}

export default ConfirmacionRegistro;
