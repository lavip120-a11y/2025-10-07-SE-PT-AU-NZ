import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const UserContext = createContext(); //context object to hold global shared data

// function to allow user data to be accessed inside each component that it wraps - currently wrapping everything in app.jsx
export function UserProvider(props) {
  // useState stores currentUser and checks localstorage for user or no user
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );

  //currentUser changes, useEffect runs when that happens, saves user to localstorage and removes user if null
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  //updates user based on who has logged in in the log in form
  function handleUpdateUser(user) {
    setCurrentUser(user);
  }

  //logout - updating current user to null
  function logout() {
    setCurrentUser(null);
  }
  //passing the value to UserContext and sharing it with children
  return (
    <UserContext.Provider value={{ currentUser, handleUpdateUser, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}
