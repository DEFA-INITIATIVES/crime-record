import { Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";

export const ProtectedRoute = ({ element: Component }) => {
  const { isAuthenticated } = useContext(AuthContext);

  console.log("isAuthenticated: ", isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return Component;
};
