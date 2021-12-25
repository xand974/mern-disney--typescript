import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InitialStateMovie,
  MovieType,
} from "../../../front/src/context/movieSlice";

const initialState: InitialStateMovie = {
  pending: false,
  error: false,
  movies: [],
  movie: null,
};

export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    GetMoviesStart: (state) => {
      state.pending = true;
    },
    GetMoviesSuccess: (state, action: PayloadAction<MovieType[]>) => {
      state.pending = false;
      state.movies = action.payload;
    },
    GetMoviesFailure: (state) => {
      state.error = true;
      state.pending = false;
    },
    DeleteMovieStart: (state) => {
      state.pending = true;
    },
    DeleteMovieSuccess: (state, action: PayloadAction<string>) => {
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
    UpdateMovieSuccess: (state, action: PayloadAction<string>) => {
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
    CreateMovieSuccess: (state, action: PayloadAction<MovieType>) => {
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
  GetMoviesStart,
  GetMoviesSuccess,
  GetMoviesFailure,
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
