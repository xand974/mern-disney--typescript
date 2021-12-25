import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import movieSlice from "./movieSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    lists: listSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
