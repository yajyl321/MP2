import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function Slider() {
  const [dogImageList, setDogImageList] = useState([]);
  const elementRef = useRef();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    RandomDogImage();
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const RandomDogImage = () => {
    GlobalApi.getrandomDog.then((resp) => {
      setDogImageList(resp.data.message);
    });
  };

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
        className="hidden md:block text-gray text-[50px] absolute mx-8 mt-[150px] rounded-lg hover:border-[4px] cursor-pointer"
        onClick={sliderLeft}
      />
      <HiChevronRight
        className="hidden md:block text-gray text-[50px] absolute mx-8 mt-[150px] rounded-lg hover:border-[4px] cursor-pointer right-0"
        onClick={sliderRight}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
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
