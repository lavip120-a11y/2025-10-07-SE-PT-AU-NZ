import { useState } from "react";

function LoginForm() {
  // input state values always need to be strings - empty initially
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  function FormSubmitted() {
//validating email and password entries
    if(email.length <5)
      setResult("Email cannot be less than 5 characters")
    else if(password.length < 4)
      setResult("Password cannot be less than 4 characters");
    else {
      setEmail("")
      setPassword("")
      setResult("Form is submitted successfully");
    }
    // //alert what is in the email / password state.  each element is updated in real time and accessed using state variable
    // alert(`Email Submitted:${email}`);
    // alert(`Password submitted:${password}`);
  }

  return (
    <>
      <div className="LoginForm componentBox">
        <div className="formRow">
          <label>
            Email Address:
            {/* Controlled form element needs both value and onChange. onChange handler uses event param e to 
            access target value. Whenever user types, new value is stored in state. */}
            <input
              type="email"
              value={email}
              name="userEmail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          {/* arrow function calling the FormSubmitted Handler */}
          <button onClick={() => FormSubmitted()}>Submit</button>
        </div>
        <div>
          <label>{result}</label>
        </div>
      </div>
    </>
  );
}
// try removing the onChange prop and typing in a field
export default LoginForm;
