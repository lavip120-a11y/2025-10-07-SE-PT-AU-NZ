import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/userProvider";

// wrap around logged-in user only routes to protect them
function ProtectedRoute({ redirectPath = "/login", children }) {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Navigate to={redirectPath} replace />;
  }
  // works for both nested and standalone routes
  return children ? children : <Outlet />;
}

export default ProtectedRoute;
