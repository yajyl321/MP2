import React from "react";

function CatCards({ pet }) {
  const imageUrl = pet.image.url || "https://via.placeholder.com/150";
  const min = 51;
  const max = 100;
  const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <div className="grid grid-cols-1 rounded-md justify-between">
      <img
        src={imageUrl}
        alt={pet.name}
        className="w-[300px] md:w-[250px] h-[110px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 cursor-pointer transition-all duration-150 ease-in inset-x-10"
      />
      <div className="relative h-32 w-20">
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

export default CatCards;
