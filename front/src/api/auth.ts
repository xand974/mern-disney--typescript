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
  dispatch: AppDispatch
): Promise<{ data: string }> => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", credential);
    dispatch(loginSuccess(res.data));
    localStorage.setItem("user", JSON.stringify(res.data));
    return {
      data: "success",
    };
  } catch (error) {
    dispatch(loginFailure());
    return {
      data: "error",
    };
  }
};

export const signUp = async (credential: CredentialType): Promise<void> => {
  try {
    await publicRequest.post("/auth/register", credential);
  } catch (error) {
    throw new Error("cannot sign up");
  }
};

export const signOut = async (dispatch: AppDispatch) => {
  localStorage.clear();
  dispatch(logoutUser());
};
