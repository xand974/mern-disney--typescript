import { publicRequest } from "./axios";
import { AppDispatch } from "../context/store";

import { loginFailure, loginStart, loginSuccess } from "../context/userSlice";
export type CredentialType = {
  username: string;
  password: string;
};

export const login = async (
  credential: CredentialType,
  dispatch: AppDispatch,
  navigate: any
): Promise<void> => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", credential);
    dispatch(loginSuccess(res.data));
    localStorage.setItem("user", JSON.stringify(res.data));
    navigate({ to: "/" });
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const register = async (
  credential: CredentialType,
  navigate: any
): Promise<void> => {
  try {
    await publicRequest.post("/auth/register", credential);
    navigate({ to: "/login" });
  } catch (error) {
    console.log(error);
  }
};
