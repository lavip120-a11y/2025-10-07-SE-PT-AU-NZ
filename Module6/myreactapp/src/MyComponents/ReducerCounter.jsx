import { useReducer } from "react";

function ReducerCounter() {
// useReducer takes a reducer function and the initial state value
// returns array with the state variable and a dispatch function
const [counter, dispatch] = useReducer(reducer, 0);

const handleIncrement = () => { //handle increment to add logic to the increment button
// we call the dispatch function to make all state updates
dispatch({ type: "increment" });
};

const handleDecrement = () => {
// dispatch takes a single argument - object passed to reducer.  dispatch calls the reducer function
dispatch({ type: "decrement" });
};

function reducer(state, action) { //state references counter state variable and action type is increment or decrement
switch (action.type) { // switch statements are common in reducers use instead of if else statements
case "increment":
return state + 1;
case "decrement":
return state - 1;
default:
return state;

//if else statment instead of switch statement
//function reducer(state, action) {
//if (action.type == "increment") return (state = state +1);
//else if (action.type = "decrement") return (state = state -1); 
// else return state; };
}
};
    
return ( //jsx - 2 buttons, 1 to increment and 1 to decrement
    <>
<div className="ReducerCounter componentBox">
<h2>Counter: {counter}</h2>
<button onClick={handleIncrement}>Reducer Increment</button>
<button onClick={handleDecrement}>Reducer Decrement</button>
</div>
</>
);
};

export default ReducerCounter;