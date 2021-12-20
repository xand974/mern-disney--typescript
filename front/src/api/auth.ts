import { publicRequest } from "./axios";
import { AppDispatch } from "../context/store";

import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutUser,
} from "../context/userSlice";
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
  console.log("start");
  try {
    console.log("doing");
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

export const logout = async (dispatch: AppDispatch) => {
  localStorage.clear();
  dispatch(logoutUser());
  window.location.reload();
};
