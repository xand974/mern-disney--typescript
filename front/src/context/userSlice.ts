import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type StateType = {
  pending: boolean;
  currentUser: UserType;
  error: boolean;
};

type UserType = {
  _id: string;
  username: string;
  email: string;
  fullName?: string;
  isAdmin: boolean;
  isSubscribed: boolean;
};

const userToken = localStorage.getItem("user");
const persistedToken = userToken ? JSON.parse(userToken) : null;

const initialState: StateType = {
  pending: false,
  currentUser: null || persistedToken,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.pending = true;
    },
    loginSuccess: (state, action: PayloadAction<UserType>) => {
      state.currentUser = action.payload;
      state.pending = false;
    },
    loginFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default userSlice.reducer;
export const { loginFailure, loginStart, loginSuccess } = userSlice.actions;
