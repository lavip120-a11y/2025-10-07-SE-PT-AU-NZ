import { useState } from "react";

export function useFormInput(initialValue) {
// our custom hook still uses useState internally
const [value, setValue] = useState(initialValue);

// generic handler function to update state
function handleChange(e) {
setValue(e.target.value);
}

// generic function to reset input value
const reset = () => setValue('');
// object containing the state value and handler function
// can be unpacked to set as props for input element
const inputProps = { //defined an object - inputProps with 2 fields value and onChange
value: value,
onChange: handleChange
};
// returns data to be used by a component from inputProps and reset value - returns an object inputProps and a function reset.
return [inputProps, reset];
}
