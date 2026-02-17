import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext(); 

export function UserProvider(props) {
const [currentUser, setCurrentuser] = useState({});

function handleUpdateUser(user) {
    setCurrentuser(user);
}

return (
    <UserContext.Provider value={{ currentUser, handleUpdateUser }}>
        {props.children}
    </UserContext.Provider>
);
}