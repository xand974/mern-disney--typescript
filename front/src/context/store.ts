import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import listSlice from "./listSlice";
import movieSlice from "./movieSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    list: listSlice,
    movie: movieSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
