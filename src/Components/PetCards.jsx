import React from "react";

function PetCards({ pet }) {
  const imageUrl = pet.image || "https://via.placeholder.com/150";

  return (
    <div>
      <img src={imageUrl} alt={pet.name} />
      <h3>{pet.name}</h3>
    </div>
  );
}

export default PetCards;
