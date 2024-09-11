import React from "react";
import GenreList from "../Constant/GenreList";
import PetList from "./PetList";

function GenrePetList() {
  return (
    <div>
      {GenreList.dogs.map(
        (item, index) =>
          index <= 4 && (
            <div className="p-8 px-8 md:px-16">
              <h2
                className="text-[20px] text-black 
                font-bold"
              >
                {item.name}
              </h2>
              <PetList genreId={item.id} />
            </div>
          )
      )}
      {GenreList.cats.map((item) => (
        <div className="p-8 px-8 md:px-16">
          <h2
            className="text-[20px] text-black 
                font-bold"
          >
            {item.name}
          </h2>
        </div>
      ))}
      {GenreList.msc.map((item) => (
        <div className="p-8 px-8 md:px-16">
          <h2
            className="text-[20px] text-black 
                font-bold"
          >
            {item.name}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default GenrePetList;
