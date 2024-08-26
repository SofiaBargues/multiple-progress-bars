import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [bar, setBar] = useState(0);
  let barras = [];
  for (let i = 0; i <= bar; i++) {
    barras.push(<div key={i}>barra</div>);
  }

  function handleClick() {
    const x = bar;
    setBar(x + 1);
  }
  return (
    <div className="flex  flex-col m-10 gap-6 ">
      <button
        onClick={handleClick}
        className="bg-[#2d3f50] w-32 text-white font-bold py-2"
      >
        + Add
      </button>
      <div className="border-4 border-[#2d3f50] h-8"></div>
      {barras}
    </div>
  );
}

export default App;
