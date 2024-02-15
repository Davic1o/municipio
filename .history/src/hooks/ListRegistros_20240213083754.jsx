import React, { useState, useEffect } from 'react';

const TuComponente = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simula la carga de datos (reemplaza esto con tu lógica real)
    const cargarDatos = async () => {
      try {
        // Aquí deberías poner tu lógica de carga de datos
        // Por ejemplo, utiliza fetch para obtener datos de un servidor
        const response = await fetch('URL_DE_TUS_DATOS');
        const datos = await response.json();

        // Simula una demora de 2 segundos para la carga
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Actualiza el estado con los datos cargados
        setData(datos);
        setLoading(false);
      } catch (error) {
        console.error('Error al cargar datos:', error);
        setLoading(false);
      }
    };

    // Llama a la función cargarDatos al montar el componente
    cargarDatos();
  }, []); // La dependencia vacía asegura que se ejecute solo una vez al montar el componente

  return (
    <div>
      {loading && <p>Cargando datos...</p>}
      {!loading && data && (
        <div>
          {/* Aquí renderiza tu contenido con los datos */}
          {/* Ejemplo: */}
          <h1>{data.titulo}</h1>
          <p>{data.descripcion}</p>
        </div>
      )}
    </div>
  );
};

export default TuComponente;



