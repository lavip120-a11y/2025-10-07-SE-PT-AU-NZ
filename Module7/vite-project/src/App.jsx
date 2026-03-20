import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppRoutes from "./Components/AppRoutes";
import NavBar from "./Components/NavBar";
import { UserProvider } from "./Context/UserProvider";
import { ThemeProvider } from "@emotion/react";
import { tealTheme } from "./Components/TealTheme";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <ThemeProvider theme={tealTheme}>  {/* pass the prop to themeprovider, SX style will override the tealTheme */}
        <UserProvider>
          <NavBar />
          <AppRoutes></AppRoutes>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
