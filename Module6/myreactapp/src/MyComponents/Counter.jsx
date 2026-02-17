import { useState } from "react";
import { useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  //destructured into two variables - count and setCount and used useState hook to initialize the state variable 'count' to 0

  const counterRef = useRef(0); //useRef non state variable referenced by counterRef(no re render) with current property of 0

  alert(counterRef.current); //checking the value of counterRef using alert

    return (
    <>
      <div>Counter: {count}</div>
      <button
        onClick={() => {
          //calling an arrow function on button click the counterRef is increased by 1 and remembered
          counterRef.current = counterRef.current + 1;
          setCount(count + 1); //you cannot do count = count + 1 as state variables are immutable
          alert(count + 1); // just to show the incremented value
        }}>
        Increment
      </button>
      {/* if you refresh the page it will start from 0 again */}
    </>
  );
}

export default Counter;
