import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";
import { useContext } from "react";
import { UserContext } from "../Context/UserProvider";


function LoginForm() {
  // input state values always need to be strings - empty initially
  const [result, setResult] = useState("");

  const [emailInputProps, resetEmail] = useFormInput("");
  const [passInputProps, resetPassword] = useFormInput("");
//get useContext - currentUser and handleUpdateUser
  const { currentUser, handleUpdateUser } = useContext(UserContext);

  
const logoutJSX = (
<>
<button onClick={logout}>Logout</button>
</>
);
const loginJSX = (
<>
<div>
   <div className="LoginForm componentBox">
        <div className="formRow"></div>
        <label>
            Email Address:
             {/* Controlled form element needs both value and onChange. onChange handler uses event param e to 
            access target value. Whenever user types, new value is stored in state.  */}
            <input
              type="email"
              name="userEmail"
              {...emailInputProps}
              />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              {...passInputProps}
              />
          </label>
          </div>
           {/* arrow function calling the FormSubmitted Handler */}
           <div>
          <button onClick={() => FormSubmitted()}>Submit</button>
          </div>
          <div>
           <label>{result}</label>
          </div>
          </div>
          </>
          );
          
  function FormSubmitted() {
//validating email and password entries
    if (emailInputProps.value.length <5)
      setResult("Email cannot be less than 5 characters");
    else if (passInputProps.value.length < 4)
      setResult("Password cannot be less than 4 characters");
    else {
      resetEmail();
      resetPassword();
      handleUpdateUser({ user: emailInputProps.value }); //store the user information in the context
      setResult("User logged in successfully");
    }
    // //alert what is in the email / password state.  each element is updated in real time and accessed using state variable
    // alert(`Email Submitted:${email}`);
    // alert(`Password submitted:${password}`);
  }
function logout() {
  handleUpdateUser({});
  setResult("");
}

  return (
  <>{currentUser.user ? logoutJSX : loginJSX}</>
  );
  }

export default LoginForm;
