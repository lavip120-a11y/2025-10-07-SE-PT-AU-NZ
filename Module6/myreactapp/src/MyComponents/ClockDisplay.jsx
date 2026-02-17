import { useState } from "react";
import Clock from "./Clock";

function ClockDisplay() {
  const [showClock, setShowClock] = useState(false);

  const toggleClock = () => {
    setShowClock(!showClock);
  };

  return (
    //hide or display clock based on button click (boolean value). First time loaded it will be hidden because useState is False.
    <>
      <div className="ClockDisplay componentBox">
        {showClock && <Clock />}
        <button onClick={toggleClock}>Toggle Clock</button>
      </div>
    </>
  );
}

export default ClockDisplay;


