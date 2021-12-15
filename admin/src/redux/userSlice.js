import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: null || JSON.parse(localStorage.getItem("user")),
    pending: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.pending = true;
    },
    loginSuccess: (state, action) => {
      state.pending = false;
      state.user = action.payload;
    },
    loginFailure: (state) => {
      state.error = true;
      state.pending = false;
      state.user = null;
    },
  },
});

export default UserSlice.reducer;
export const { loginStart, loginSuccess, loginFailure } = UserSlice.actions;
