import React from "react";

function CatCards({ pet }) {
  const imageUrl = pet.image || "https://via.placeholder.com/150";
  return (
    <div>
      <img
        src={imageUrl}
        alt={pet.name}
        className="'w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 cursor-pointer transition-all duration-150 ease-in"
      />
      <h3>{pet.name}</h3>
    </div>
  );
}

export default CatCards;
