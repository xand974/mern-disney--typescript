import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MovieType = {
  _id: string;
  desc: string;
  thumbnail: string;
  videoURL: string;
  isSeries: boolean;
  ageLimit: number;
  genre: string[];
  category: string;
  duration: number;
  year: number;
  title: string;
  type: string;
  bigPicture: string;
};

export type InitialStateMovie = {
  pending: boolean;
  error: boolean;
  movies: MovieType[];
  movie: MovieType | null;
};

const initialState: InitialStateMovie = {
  pending: false,
  error: false,
  movies: [],
  movie: null,
};

export const movieSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    getMoviesStart: (state) => {
      state.pending = true;
    },
    getMoviesSuccess: (state, action: PayloadAction<MovieType[]>) => {
      state.pending = false;
      state.movies = action.payload;
    },
    getMoviesFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    getMovieStart: (state) => {
      state.pending = true;
    },
    getMovieSuccess: (state, action: PayloadAction<MovieType>) => {
      state.pending = false;
      state.movie = action.payload;
    },
    getMovieFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default movieSlice.reducer;
export const {
  getMoviesStart,
  getMoviesSuccess,
  getMoviesFailure,
  getMovieFailure,
  getMovieStart,
  getMovieSuccess,
} = movieSlice.actions;
