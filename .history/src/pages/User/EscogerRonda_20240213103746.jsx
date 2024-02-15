import React, { useState, useEffect } from 'react';

const EscogerRonda = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekDates, setWeekDates] = useState([]);

  const generateWeekDates = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      dates.push(date);
    }

    setWeekDates(dates);
  };

  useEffect(() => {
    generateWeekDates();
  }, [currentDate]);

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
              <td key={date.toISOString()}>{date.getDate()}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EscogerRonda