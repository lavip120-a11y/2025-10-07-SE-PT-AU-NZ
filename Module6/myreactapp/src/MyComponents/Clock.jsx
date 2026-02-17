import { useState, useEffect } from "react"; //import useState and useEffect

function Clock() { 
  const [date, setDate] = useState(new Date()); //store the date information in useState (destructured to date, setDate) new date gets the date and time

  useEffect(() => {
    // first arg/parameter is usually an arrow function
    const clockInterval = setInterval(() => tick(), 1000); 
    console.log("Clock component mounted");
    //call the tick function in the setInterval every 1 second
    
    return() => { 
        console.log("Clock component unmounted");
        clearInterval(clockInterval); //will stop the clock when ever the clock is hidden in ClockDisplay
        };
  }, []); // second arg is an array of dependencies and it is empty so useEffect will only run once

  function tick() {
    setDate(new Date()); //use setDate and pass a new date to it
    console.log("tick called"); // track the effect frequency (debug)
  };

  return ( //rendering a digital clock. converting the date using toLocaleTimeString.  
    <>
      <div className="Clock">
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()} 
      </div>
    </>
  );
}

export default Clock; //exporting the component
