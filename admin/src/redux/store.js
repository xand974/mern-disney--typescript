import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import movieSlice from "./movieSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    movies: movieSlice,
    lists: listSlice,
  },
});
