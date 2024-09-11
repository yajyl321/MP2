import React from "react";

function PetCards({ pet }) {
  // Assuming `pet` has `name` and `image` properties
  const imageUrl = pet.image || "https://via.placeholder.com/150"; // Use a placeholder if no image is available

  return (
    <div>
      <img src={imageUrl} alt={pet.name} />
      <h3>{pet.name}</h3>
    </div>
  );
}

export default PetCards;
