import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import PetCards from "./PetCards";

function PetList() {
  const [dogList, setDogList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    dogBreed();
  }, []);

  const dogBreed = async () => {
    try {
      const data = await GlobalApi.getdogBreed();
      console.log("Response:", data); // Log response for debugging
      setDogList(data); // Adjust based on the actual response structure
    } catch (error) {
      console.error("Error fetching dog breeds:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex">
      {dogList.map((item) => (
        <PetCards key={item.id} pet={item} />
      ))}
    </div>
  );
}

export default PetList;
