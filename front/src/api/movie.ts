import { SetStateAction } from "react";
import { privateRequest } from "./axios";

export const getSliderItem = async (setSliderItem: SetStateAction<any>) => {
  try {
    const res = await privateRequest.get("/movies/slider");
    setSliderItem(res.data);
  } catch (error) {
    alert(error);
  }
};

export const getMovie = async (
  content: string[] | null,
  setMovie: SetStateAction<any>,
  pathname: string | null
) => {
  try {
    if (content) {
      const movieArr = await Promise.all(
        content.map((id) => {
          return privateRequest.get(`/movies/one/${id}`);
        })
      );
      setMovie(movieArr.map((a) => a.data));
    }
    if (pathname) {
      const res = await privateRequest.get(`/movies/one/${pathname}`);
      setMovie(res.data);
    }
  } catch (error) {}
};

export const getMoviesByCat = async (
  setMovies: SetStateAction<any>,
  cat: string
) => {
  try {
    const res = await privateRequest.get("/movies/cat?cat__query=" + cat);
    setMovies(res.data);
  } catch (error) {
    alert(error);
  }
};
