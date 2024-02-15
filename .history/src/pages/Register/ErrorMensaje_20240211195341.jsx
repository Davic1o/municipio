

const ErrorMensaje = ({ error }) => {
  // Verifica si hay un error antes de mostrar el alert
  if (error) {
    alert(error);
  }

  // Devuelve null o cualquier otro contenido que desees en el componente
  return null;
};

export default ErrorMensaje;
