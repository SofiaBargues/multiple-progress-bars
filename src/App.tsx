import { useEffect, useState } from "react";

function ProgressBar({ key, charge }: { key: number; charge: number }) {
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
  const [charge, setCharge] = useState(0);

  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      if (charge < bar * 100) {
        setCharge(charge + 1);
      }
    }, 3000 / 100);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [charge, bar]); // Empty dependency array ensures the effect runs only once

  const barras = [];
  for (let i = 0; i < bar; i++) {
    //calculate charge for this proggres bar
    const completeBars = Math.floor(charge / 100);
    let barCharge;
    if (i < completeBars) {
      barCharge = 100;
    } else if (i > completeBars) {
      barCharge = 0;
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
