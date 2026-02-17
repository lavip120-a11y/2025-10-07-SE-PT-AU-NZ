import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppRoutes from "./Components/AppRoutes";
//import NavBar from "./Components/NavBar";
import { UserProvider } from "./Context/UserProvider";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import { ThemeProvider } from "@emotion/react";
import { MyTheme } from "./Components/MyTheme";
import BasicUsage from "./Components/StyledUtility";
import SelectActionCard from "./Components/SelectActionCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={MyTheme}>
        <UserProvider>
          <ResponsiveAppBar></ResponsiveAppBar>
          <AppRoutes></AppRoutes>
          {/* <NavBar></NavBar> */}
          <BasicUsage></BasicUsage>
          <SelectActionCard></SelectActionCard>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
