import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";

export const useAuthChecked = () => {
  const [loginChecked, setLoginChecked] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const local = window.localStorage.getItem("auth");
    if (local) {
      const localAuth = JSON.parse(local);
      dispatch(userLoggedIn(localAuth));
      setLoginChecked(true);
    }
    setLoginChecked(true);
  }, [dispatch]);

  return loginChecked;
};
