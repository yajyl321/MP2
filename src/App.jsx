import { useState } from "react";
import Logo from "./assets/logo.svg";
import "./App.css";
import Header from "./assets/Components/Header";
import Slider from "./assets/Components/Slider";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header />

      <Slider />
    </div>
  );
}

export default App;
