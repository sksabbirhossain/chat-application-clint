import { useSelector } from "react-redux";
import {
  selectUserAccessToken,
  selectUserInfo,
} from "../features/auth/authSelectors";

export const useCheckedLoggedIn = () => {
  const userInfo = useSelector(selectUserInfo);
  const userAccessToken = useSelector(selectUserAccessToken);

  if (userInfo !== undefined && userAccessToken !== undefined) {
    return true;
  } else {
    return false;
  }
};
