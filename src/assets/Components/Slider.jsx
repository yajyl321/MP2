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
        console.log(resp.data);
        setDogImageList(resp.data.message);
      })
      .catch((error) => {
        console.error("Error fetching dog images:", error);
      });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderRight = (element) => {
    if (element) {
      element.scrollLeft += screenWidth - 110;
    }
  };

  const sliderLeft = (element) => {
    if (element) {
      element.scrollLeft -= screenWidth - 110;
    }
  };

  return (
    <div className="relative">
      <HiChevronLeft
        className="hidden md:block text-gray text-[30px] absolute mx-8 mt-[150px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-gray text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide"
        ref={elementRef}
      >
        {dogImageList && dogImageList.length > 0 ? (
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

// function Slider() {
//     const [dogList, setDogList] = useState([]);

//     const getDog = () => {
//       GlobalApi.getDogBreeds()
//         .then((resp) => {
//           console.log(resp.weight);
//           setDogList(resp.weight);
//         })
//         .catch((error) => {
//           console.error("Error fetching dog breeds:", error);
//         });
//     };

//     return <div>{dogList.map((item, index) => {

//     })}</div>;

//     useEffect(() => {
//       getDog();
//     }, []);
//   }
