import React from "react";
import { Navigate } from "react-router-dom";
import { useCheckedLoggedIn } from "../hooks/useCheckedLoggedIn";

export const PrivateRoute = ({ children }) => {
  const checkedLoggedIn = useCheckedLoggedIn();

  return checkedLoggedIn ? children : <Navigate to="/" replace/>;
};
