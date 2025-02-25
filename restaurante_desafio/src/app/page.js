"use client";

import React, { useState } from "react";
import SelectorZona from "../components/SelectorZona";
import PlanoRestaurante from "../components/PlanoRestaurante";
import ResumenReserva from "../components/ResumenReserva";

const Home = () => {
  const [zonaSeleccionada, setZonaSeleccionada] = useState("Terraza");
  
  const [mesasPorZona, setMesasPorZona] = useState({ //lo que hacemos aca es que estamos almacenando los mesas por zona en un tipo array
    Terraza: [
      { id: 1, disponible: true },
      { id: 2, disponible: true },
      { id: 3, disponible: false },
      { id: 4, disponible: false },
      { id: 5, disponible: true},

    ],
    Interior: [
      { id: 4, disponible: true },
      { id: 5, disponible: true },
      { id: 6, disponible: false },
    ],
    VIP: [
      { id: 7, disponible: true },
      { id: 8, disponible: true },
    ],
  });

  const [reserva, setReserva] = useState(null); 
  const [cantidadPersonas, setCantidadPersonas] = useState(0); 

  const zonas = ["Terraza", "Interior", "VIP"]; // creamos un array de zonas

  const handleZonaChange = (zona) => {
    setZonaSeleccionada(zona);
    setReserva(null); 
  };

  //este apartado es para que cuando cambie de zona, se actualicen los mesas disponibles
  const handleReservar = (mesaId) => {
    setMesasPorZona((prevState) => {
      const nuevasMesas = prevState[zonaSeleccionada].map((mesa) =>
        mesa.id === mesaId ? { ...mesa, disponible: false } : mesa
      );
      return { ...prevState, [zonaSeleccionada]: nuevasMesas };
    });

    setReserva({
      mesaId,
      zona: zonaSeleccionada,
      personas: cantidadPersonas,
    });
  };

 //y aca retornamos el componente con todas las cosas que creamos
  return (
    <div className="container mt-5">
      <h1>Reserva de Mesas</h1>
      <SelectorZona zonas={zonas} zonaSeleccionada={zonaSeleccionada} onZonaChange={handleZonaChange} />
      <h3>Cantidad de personas</h3>
      <input
        type="number"
        min="1"
        max="10"
        value={cantidadPersonas}
        onChange={(e) => setCantidadPersonas(Number(e.target.value))}
        className="form-control mt-3"
      />
      
      <PlanoRestaurante mesas={mesasPorZona[zonaSeleccionada]} onReservar={handleReservar} />
      <ResumenReserva reserva={reserva} />
    </div>
  );
};

export default Home;