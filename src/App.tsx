import { useState } from "react";

function ProgressBar({ key, charge }) {
  if (charge > 100 && 0 > charge) {
    // console.log("charge is not in range");x
  }
  return (
    <div key={key} className="border-4 border-[#2d3f50]  h-8">
      <div
        style={{
          width: charge + "%",
        }}
        className="bg-blue-500 h-6"
      ></div>
    </div>
  );
}

export function App() {
  const [bar, setBar] = useState(0);
  const [charge, setCharge] = useState(210);
  let barras = [];
  for (let i = 0; i <= bar; i++) {
    //calculate charge for this proggres bar
    const entero = Math.floor(charge / 100);
    let barCharge;
    if (i < entero) {
      barCharge = 100;
    } else {
      barCharge = charge % 100;
    }

    barras.push(<ProgressBar key={i} charge={barCharge} />);
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
