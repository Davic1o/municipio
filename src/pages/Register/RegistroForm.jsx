import React from 'react';
import { FaUser, FaAddressCard } from 'react-icons/fa';
import { RiLockPasswordFill } from 'react-icons/ri';
import { ImMap } from 'react-icons/im';

const RegistroForm = ({ username, setUsername, cedula, setCedula, password, setPassword, confirmPassword, setConfirmPassword, zona, setZona }) => {
  return (
    <div className="register__formulario">
      <div className="contenedor__nombre">
        <FaUser className="icon__nombre" />
        <input
          type="text"
          className="inp__nombre"
          placeholder="Nombre de Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="contenedor__nombre">
        <FaAddressCard className="icon__password" />
        <input
          type="text"
          className="inp__nombre"
          placeholder="Ingrese su Cédula"
          value={cedula}
          maxLength={10}
          onChange={(e) => {
            const inputValue = e.target.value.replace(/\D/g, '').slice(0, 10);
            setCedula(inputValue);
          }}
        />
      </div>
      <div className="contenedor__password">
        <RiLockPasswordFill className="icon__password" />
        <input
          type="password"
          className="inp__password"
          placeholder="Ingrese su Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="contenedor__password">
        <RiLockPasswordFill className="icon__password" />
        <input
          type="password"
          className="inp__password"
          placeholder="Repita su Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="contenedor__zona">
        <ImMap className="icon__password" />
        <select
          id="zona"
          value={zona}
          onChange={(e) => setZona(e.target.value)}
        >
          <option className="primer__opcion" value="">
            Seleccione su zona
          </option>
          <option value="Norte">Zona Norte</option>
          <option value="Sur">Zona Sur</option>
          <option value="Centro">Zona Centro</option>
        </select>
      </div>
    </div>
  );
};

export default RegistroForm;
