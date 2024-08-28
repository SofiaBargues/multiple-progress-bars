import { useState } from "react";

function App() {
  const [bar, setBar] = useState(0);
  const [carga, setCarga] = useState(10);
  let barras = [];
  for (let i = 0; i <= bar; i++) {
    barras.push(
      <div key={i} className="border-4 border-[#2d3f50]  h-8">
        <div
          style={{
            width: carga + "%",
          }}
          className="bg-blue-500 h-6"
        ></div>
      </div>
    );
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

      {barras}
    </div>
  );
}

export default App;
