import React from "react";

function DogCards({ pet }) {
  const imageUrl = pet.image || "https://via.placeholder.com/150"; // Use a placeholder if no image is available
  const min = 51;
  const max = 100;
  const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div>
      <img
        src={imageUrl}
        alt={pet.name}
        className="w-[110px] md:w-[200px] h-[110px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 cursor-pointer transition-all duration-150 ease-in"
      />
      <div className="relative h-32 w-32">
        <h3>{pet.name}</h3>
        <h5 className="absolute inset-x-0 bottom-0 h-16">${randomInteger}</h5>
      </div>
    </div>
  );
}

export default DogCards;
