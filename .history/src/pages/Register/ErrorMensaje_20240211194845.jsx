import  { useState, useEffect } from 'react';

const ErrorMensaje = ({ error }) => {
  const [mostrarError, setMostrarError] = useState(true);

  useEffect(() => {
    if (error) {
      alert(error); // Puedes utilizar alert o algún otro método para mostrar el error
      setMostrarError(false);
    }
  }, [error]);

  return null;
};

export default ErrorMensaje;
