import React from "react";
import Mesa from "./Mesa";

const PlanoRestaurante = ({ mesas, onReservar }) => {
  return (
    <div>
      <h3>Plano del Restaurante</h3>
      <div className="d-flex flex-wrap">
        {mesas.map((mesa) => (
          <Mesa key={mesa.id} mesa={mesa} onReservar={onReservar} />
        ))}
      </div>
    </div>
  );
};

export default PlanoRestaurante;
