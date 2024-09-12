import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Slider from "./Components/Slider";
import GenrePetList from "./Components/GenrePetList";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <Header />

      <Slider />

      <GenrePetList />
      <Footer />
    </div>
  );
}

export default App;
