import { publicRequest } from "../api/axios";
import { useAppDispatch } from "../hooks/selector";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";
type CredentialType = {
  username: string;
  password: string;
};

export const login = async (
  credential: CredentialType,
  dispatch: typeof useAppDispatch
) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", credential);
    dispatch(loginSuccess(res.data));
    localStorage.setItem("user", res.data);
  } catch (error) {
    dispatch(loginFailure());
  }
};
