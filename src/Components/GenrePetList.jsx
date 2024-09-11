import React from "react";
import GenreList from "../Constant/GenreList";
import DogList from "./DogList";
import CatList from "./CatList";

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
              <DogList genreId={item.id} />
            </div>
          )
      )}
      {GenreList.cats.map(
        (item, index) =>
          index <= 4 && (
            <div className="p-8 px-8 md:px-16">
              <h2
                className="text-[20px] text-black 
                font-bold"
              >
                {item.name}
                <CatList genreId={item.id} />
              </h2>
            </div>
          )
      )}
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
