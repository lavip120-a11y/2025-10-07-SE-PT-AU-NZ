import { useState } from "react";

export function useFormInput(initialValue) {
  // our custom hook still uses useState internally
  const [value, setValue] = useState(initialValue);

  // update state with new value
  function handleChange(e) {
    setValue(e.target.value);
  }

  // reset clears the form
  const reset = () => setValue("");

  const inputProps = {
    //an object - inputProps with 2 fields value and handleChange
    value: value, //current value in state
    onChange: handleChange, //onChange function updates whenever called
  };
  // returns data to be used by a component from inputProps and reset value - returns an object inputProps and a function reset.
  return [inputProps, reset];
}
