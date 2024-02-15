import React, { useState, useEffect, useCallback } from 'react';
import Modal from '../../components/Modal';
import './ronda.css'

const EscogerRonda = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [dayOfWeek, setDayOfWeek] = useState(''); // Agregada la declaración de dayOfWeek

  const handleOpenModal = (date) => {
    setModalOpen(true);
    setDayOfWeek(date.toLocaleDateString('es-ES', { weekday: 'long' }));
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekDates, setWeekDates] = useState([]);

  // Mueve la definición de generateWeekDates dentro del useEffect como un useCallback
  const generateWeekDates = useCallback(() => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      dates.push(date);
    }

    setWeekDates(dates);
  }, [currentDate]);

  useEffect(() => {
    generateWeekDates();
  }, [currentDate, generateWeekDates]);

  const prevWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const nextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
  };

  return (
    <div className='contenedor__calendario'>
      <h1 className='titulo__rondas'>Rondas Semanales</h1>
      <div className='menu__rondas'>
        <button onClick={prevWeek}>Anterior Semana</button>
        <span>{currentDate.toDateString()}</span>
        <button onClick={nextWeek}>Siguiente Semana</button>
      </div>
      <table className='tabla__rondas'>
        <thead className='tabla__titulo__rondas'>
          <tr className='fila__titulo'>
            {weekDates.map((date) => (
              <th key={date.toISOString()}>{date.toLocaleDateString('es-ES', { weekday: 'short' })}</th>
            ))}
          </tr>
        </thead>
        <tbody className='tabla__cuerpo__rondas'>
          <tr>
            {weekDates.map((date) => (
              <td key={date.toISOString()} onClick={() => handleOpenModal(date)}>
                {date.getDate()}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} diasemana={dayOfWeek} fecha={currentDate}/>
    </div>
  );
};

export default EscogerRonda;


