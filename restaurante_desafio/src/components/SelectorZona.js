import React from "react";

const SelectorZona = ({ zonas, zonaSeleccionada, onZonaChange }) => {
  return (
    <div className="mb-4">
      <h3>Selecciona una Zona</h3>
      <select className="form-select" value={zonaSeleccionada} onChange={(e) => onZonaChange(e.target.value)}>
        {zonas.map((zona) => (
          <option key={zona} value={zona}>
            {zona}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorZona;