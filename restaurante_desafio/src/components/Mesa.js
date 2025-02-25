import React from 'react';

const Mesa = ({ mesa, onReservar }) => {
  const { id, disponible } = mesa;

  return (
    <button
      className={`btn ${disponible ? 'btn-success' : 'btn-danger'} m-2`}
      onClick={() => onReservar(id)}
      disabled={!disponible}> Mesa {id}
    </button>
  );
};

export default Mesa;