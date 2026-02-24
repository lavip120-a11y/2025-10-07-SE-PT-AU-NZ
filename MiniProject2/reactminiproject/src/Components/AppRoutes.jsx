import { Routes, Route } from "react-router-dom";
import Homepage from "./HomePage";
//import SelectActionCard from "./SelectActionCard";
import LoginForm from "./LoginForm";
import ChatForumPage from "./ChatForumPage";
import ProtectedRoute from "./ProtectedRoute";
import ElderCare from "./ElderCare";
import Money from "./Money";
import Counselling from "./Counselling";
import AdvocacyServices from "./AdvocacyServices";
import Dashboard from "./Dashboard";

function AppRoutes({ searchTerm }) {
  return (
    <Routes>
      <Route
        index
        element={<Homepage searchTerm={searchTerm}></Homepage>}
      ></Route>
      <Route path="/login" element={<LoginForm></LoginForm>}></Route>
      <Route path="/elder" element={<ElderCare></ElderCare>}></Route>
      <Route
        path="/money"
        element={<Money searchTerm={searchTerm}></Money>}
      ></Route>
      <Route path="/counselling" element={<Counselling></Counselling>}></Route>
      <Route
        path="/advocacy"
        element={<AdvocacyServices></AdvocacyServices>}
      ></Route>

      {/* protected access */}
      <Route
        path="/dash"
        element={
          <ProtectedRoute>
            <Dashboard></Dashboard>
          </ProtectedRoute>
        }
      />
      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <ChatForumPage></ChatForumPage>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
