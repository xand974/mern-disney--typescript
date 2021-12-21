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
  content: string[],
  setMovie: SetStateAction<any>
) => {
  try {
    const movieArr = await Promise.all(
      content.map((id) => {
        return privateRequest.get(`/movies/one/${id}`);
      })
    );
    setMovie(movieArr.map((a) => a.data));
  } catch (error) {}
};
