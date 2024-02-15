import React from 'react';

const CheckboxAdmin = ({ isAdmin, setIsAdmin }) => {
  return (
    <div className="contenedor__check">
      <label className='label__check'>
        <input
          type="checkbox"
          checked={isAdmin}
          onChange={() => setIsAdmin(!isAdmin)}
        />
        Administrador o Coordinador
      </label>
    </div>
  );
};

export default CheckboxAdmin;
