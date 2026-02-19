import { Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
import LoginForm from "./LoginForm";
import BitcoinRates from "./BitcoinRates";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Homepage></Homepage>}></Route>
      <Route path="/login" element={<LoginForm></LoginForm>}></Route>
      <Route path="/rates" element={<BitcoinRates></BitcoinRates>}></Route>
    </Routes>
  );
}

export default AppRoutes;
