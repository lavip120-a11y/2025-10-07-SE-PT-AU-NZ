import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  //destructured into two variables - count and setCount and used useState hook to initialize the state variable 'count' to 0

  return (
    <>
      <div>Counter: {count}</div>
      <button
        onClick={() => {
          //calling an arrow function on button click
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
