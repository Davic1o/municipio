import React from 'react';

const CheckboxAdmin = ({ isAdmin, setIsAdmin }) => {
  return (
    <div className="contenedor__isAdmin">
      <label>
        <input
          type="checkbox"
          checked={isAdmin}
          onChange={() => setIsAdmin(!isAdmin)}
        />
        Es Administrador
      </label>
    </div>
  );
};

export default CheckboxAdmin;
