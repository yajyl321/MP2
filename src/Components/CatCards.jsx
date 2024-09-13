// src/CatCards.jsx
import React, { useState } from "react";
import Lightbox from "../Constant/Lightbox";

function CatCards({ pet }) {
  const imageUrl = pet.image.url || "https://via.placeholder.com/150";
  const min = 51;
  const max = 100;
  const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  const lightboxContent = (
    <div>
      <h1 className="py-2">{pet.name}</h1>
      <img
        src={imageUrl}
        alt={pet.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />

      <h4 className="font-bold py-1">Description:</h4>
      <h5 className="font-semibold py-1">{pet.description}</h5>

      <h5>
        Temperament:
        {pet.temperament}
      </h5>
    </div>
  );

  return (
    <div>
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        content={lightboxContent}
      />
      <div className="max-w-xs md:max-w-sm w-full rounded-lg border-2 border-gray-400 hover:scale-105 transition-transform duration-150 ease-in p-3 bg-white shadow-md cursor-pointer">
        <img
          src={imageUrl}
          alt={pet.name}
          className="w-full h-40 object-cover rounded-t-lg"
          onClick={openLightbox}
        />
        <div className="flex flex-col justify-between h-40 mt-2">
          <h1
            className="font-semibold text-lg mb-2 cursor-pointer"
            onClick={openLightbox}
          >
            {pet.name}
          </h1>
          <div className="flex justify-between items-center mt-auto">
            <h5 className="text-gray-700 font-semibold">${randomInteger}</h5>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md text-sm hover:bg-blue-600 transition-colors duration-150">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CatCards;
