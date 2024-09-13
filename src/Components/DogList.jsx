import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import DogCards from "./DogCards";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function DogList() {
  const [dogList, setDogList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const elementRef = useRef();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetchDogBreeds();
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchDogBreeds = async () => {
    try {
      const data = await GlobalApi.getDogBreed(); // Call the API function
      console.log(data); //for debugging
      setDogList(data); // Set the fetched data to state
    } catch (error) {
      console.error("Error fetching dog breeds:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
    <div>
      <div className="flex justify-between mb-2">
        <HiChevronLeft onClick={sliderLeft} className="cursor-pointer" />
        <HiChevronRight onClick={sliderRight} className="cursor-pointer" />
      </div>
      <div
        className="flex overflow-x-auto gap-8 scrollbar-hide p-5 px-3 scroll-smooth"
        ref={elementRef}
      >
        {dogList.map((item) => (
          <DogCards key={item.id} pet={item} /> // Pass the dog data to DogCards
        ))}
      </div>
    </div>
  );
}

export default DogList;
