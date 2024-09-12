import React from "react";

function DogCards({ pet }) {
  const imageUrl = pet.image || "https://via.placeholder.com/150"; // Use a placeholder if no image is available
  const min = 51;
  const max = 100;
  const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="grid grid-cols-1 rounded-lg justify-between border-[3px] hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in">
      <img
        src={imageUrl}
        alt={pet.name}
        className="w-[300px] md:w-[250px] h-[110px] rounded-lg"
      />
      <div className="relative h-40 w-20">
        <h1 className="font-semibold py-2">{pet.name}</h1>
        <h5 className="absolute inset-x-4 bottom-10 text-center">
          ${randomInteger}
        </h5>
        <button className="absolute inset-x-4 bottom-0 h-8  bg-blue-500 text-white px-2 py-1 rounded-md text-xs ">
          Buy
        </button>
      </div>
    </div>
  );
}

export default DogCards;
