// src/Components/Lightbox.jsx
import React from "react";

const Lightbox = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg relative max-w-[32rem] mx-auto"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing the lightbox
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 "
          onClick={onClose}
        >
          &times;
        </button>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Lightbox;
