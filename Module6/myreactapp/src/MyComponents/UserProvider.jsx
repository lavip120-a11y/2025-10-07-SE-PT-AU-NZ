import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext() //first step is to create a context 

export function UserProvider(props) {
const [currentUser, setCurrentUser] = useState({});

//updates and calls setCurrentUser to update the state currentUser
function handleUpdateUser(user) {
    setCurrentUser(user);
}
    
return( //provides all the props to the all children of this userProvider component.  
<UserContext.Provider value = {{ currentUser, handleUpdateUser }}>
    {props.children}
</UserContext.Provider>
    );
   }