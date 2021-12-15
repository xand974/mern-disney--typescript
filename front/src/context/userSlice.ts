import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type StateType = {
  pending: boolean;
  currentUser: null | UserType;
  error: boolean;
};

type UserType = {
  _id: number;
};

const initialState: StateType = {
  pending: false,
  currentUser: null,
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
    },
    loginFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default userSlice.reducer;
export const { loginFailure, loginStart, loginSuccess } = userSlice.actions;
