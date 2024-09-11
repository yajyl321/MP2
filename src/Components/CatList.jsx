import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import CatCards from "./CatCards";

function CatList() {
  const [catList, setcatList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const elementRef = useRef();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    catBreed();
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const catBreed = async () => {
    try {
      const data = await GlobalApi.getcatBreed();
      console.log("Response:", data); // Log response for debugging
      setcatList(data); // Adjust based on the actual response structure
    } catch (error) {
      console.error("Error fetching cat breeds:", error);
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
        {catList.map((item) => (
          <CatCards key={item.id} pet={item} />
        ))}
      </div>
    </div>
  );
}

export default CatList;
