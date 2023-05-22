import { Navigate } from "react-router-dom";
import { useCheckedLoggedIn } from "../hooks/useCheckedLoggedIn";

export const PublicRoute = ({ children }) => {
  const checkedLoggedIn = useCheckedLoggedIn();

  return !checkedLoggedIn ? children : <Navigate to="/inbox" />;
};
