import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import AppRoutes from "./Components/AppRoutes";
import { UserProvider } from "./Context/userProvider";
import { ProjectTheme } from "./Components/ProjectTheme";
import SearchAppBar from "./Components/SearchAppBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <ThemeProvider theme={ProjectTheme}>
        <UserProvider>
          {/* passing props to searchappbar and AppRoutes*/}
          <SearchAppBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          ></SearchAppBar>
          <AppRoutes searchTerm={searchTerm}></AppRoutes>
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
