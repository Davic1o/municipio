import React, { useState, useEffect, useCallback } from 'react';
import Modal from '../../components/Modal'

const EscogerRonda = () => {

  const [isModalOpen, setModalOpen] = useState(false);

const handleOpenModal = (date) => {
    setModalOpen(true);
}

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
    <div>
      <h1>Calendario Semanal</h1>
      <div>
        <button onClick={prevWeek}>Anterior Semana</button>
        <span>{currentDate.toDateString()}</span>
        <button onClick={nextWeek}>Siguiente Semana</button>
      </div>
      <table>
        <thead>
          <tr>
            {weekDates.map((date) => (
              <th key={date.toISOString()}>{date.toLocaleDateString('es-ES', { weekday: 'short' })}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {weekDates.map((date) => (
            <td key={date.toISOString()} onClick={() => handleOpenModal(date)}>
            {date.getDate()}
          </td>
            ))}
          </tr>
        </tbody>
      </table>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} diasemana={dayOfWeek} />
    </div>
  );
};

export default EscogerRonda;

