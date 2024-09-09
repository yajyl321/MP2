import React, { useEffect, useRef, useState } from "react";
import { getRandomDogImage } from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Slider() {
  const [dogImageList, setDogImageList] = useState([]);
  const elementRef = useRef();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    getRandomDogImage()
      .then((resp) => {
        // Adjust based on response structure
        setDogImageList(resp.data.message); // This depends on the API response
      })
      .catch((error) => {
        console.error("Error fetching dog images:", error);
        // Optionally, set an error state here
      });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft += screenWidth - 110;
    }
  };

  const sliderLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft -= screenWidth - 110;
    }
  };

  return (
    <div className="relative">
      <HiChevronLeft
        className="hidden md:block text-gray text-[30px] absolute mx-8 mt-[150px] rounded-lg hover:border-[4px] cursor-pointer"
        onClick={sliderLeft}
      />
      <HiChevronRight
        className="hidden md:block text-gray text-[30px] absolute mx-8 mt-[150px] rounded-lg hover:border-[4px] cursor-pointer right-0"
        onClick={sliderRight}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide"
        ref={elementRef}
      >
        {dogImageList.length > 0 ? (
          dogImageList.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt="Random Dog"
              className="min-w-full md:h-[300px] object-cover mr-5 rounded-lg hover:border-[4px] border-gray-400 transition-all duration-100 ease-in-out"
            />
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
    </div>
  );
}

export default Slider;
