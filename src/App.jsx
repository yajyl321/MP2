import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import GenrePetList from "./Components/GenrePetList";

function App() {
  return (
    <div>
      <Header />

      <Slider />

      <GenrePetList />
    </div>
  );
}

export default App;
