import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";
import { useContext } from "react";
import { UserContext } from "./UserProvider";

export default function SubscribeForm() {
const [status, setStatus] = useState('');
// similar state variables mapped to form inputs

//custom hook from useFormInput
const { currentUser } = useContext(UserContext);
const [nameInputProps, resetName] = useFormInput("Mary");
const [emailInputProps, resetEmail] = useFormInput("mary@poppins.com");

// handler function already exists inside the custom hook - useFormInput

function handleSubscribe() {
resetName();
resetEmail();
setStatus('Thanks for subscribing!');
}

return (
<>
{currentUser.user ? (
<div className="SubscribeForm componentBox">
<label>
First name:
<input {...nameInputProps} /></label>
<label>
    Email: 
<input {...emailInputProps} /></label>

<button onClick={handleSubscribe}>Subscribe</button>
<div>{status}</div>
</div>
) : (<></>)}
</>
);
}