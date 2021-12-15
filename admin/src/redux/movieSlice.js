import { createSlice } from "@reduxjs/toolkit";

export const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    pending: false,
    error: false,
  },
  reducers: {
    GetMovieStart: (state) => {
      state.pending = true;
    },
    GetMovieSuccess: (state, action) => {
      state.pending = false;
      state.movies = action.payload;
    },
    GetMovieFailure: (state) => {
      state.error = true;
      state.pending = false;
    },
    DeleteMovieStart: (state) => {
      state.pending = true;
    },
    DeleteMovieSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.movies = state.movies.filter((m) => m._id !== action.payload);
    },
    DeleteMovieFailure: (state) => {
      state.error = true;
      state.pending = false;
    },
    UpdateMovieStart: (state) => {
      state.pending = true;
    },
    UpdateMovieSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.movies.map(
        (movie) => movie._id === action.payload && action.payload
      );
    },
    UpdateMovieFailure: (state) => {
      state.error = true;
      state.pending = false;
    },
    CreateMovieStart: (state) => {
      state.pending = true;
    },
    CreateMovieSuccess: (state, action) => {
      state.pending = false;
      state.error = false;
      state.movies = [...state.movies, action.payload];
    },
    CreateMovieFailure: (state) => {
      state.error = true;
      state.pending = false;
    },
  },
});

export default MovieSlice.reducer;
export const {
  GetMovieStart,
  GetMovieSuccess,
  GetMovieFailure,
  DeleteMovieFailure,
  DeleteMovieStart,
  DeleteMovieSuccess,
  CreateMovieStart,
  CreateMovieSuccess,
  CreateMovieFailure,
  UpdateMovieStart,
  UpdateMovieSuccess,
  UpdateMovieFailure,
} = MovieSlice.actions;
