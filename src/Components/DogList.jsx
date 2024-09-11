import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import DogCards from "./DogCards";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

function DogList() {
  const [dogList, setDogList, setDogImage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const elementRef = useRef();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    dogBreed();
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dogBreed = async () => {
    try {
      const data = await GlobalApi.getdogBreed();
      console.log("Response:", data); // Log response for debugging
      setDogList(data);
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
      <div className="flex overflow-x-auto gap-8 scrollbar-hide p-5 px-3 scroll-smooth">
        {dogList.map((item) => (
          <DogCards key={item.id} pet={item} />
        ))}
      </div>
    </div>
  );
}

export default DogList;
