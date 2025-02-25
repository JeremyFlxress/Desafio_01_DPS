import React from "react";

const ResumenReserva = ({ reserva }) => {
  if (!reserva) return null;

  return (
    <div className="mt-4">
      <h3>Resumen de la Reserva</h3>
      <p>Mesa: {reserva.mesaId}</p>
      <p>Zona: {reserva.zona}</p>
      <p>Personas: {reserva.personas}</p>
    </div>
  );
};

export default ResumenReserva;