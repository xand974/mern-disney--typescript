import { publicRequest, privateRequest } from "../api";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import {
  GetMoviesStart,
  GetMoviesFailure,
  GetMoviesSuccess,
  DeleteMovieStart,
  DeleteMovieFailure,
  DeleteMovieSuccess,
  CreateMovieStart,
  CreateMovieSuccess,
  UpdateMovieStart,
  UpdateMovieSuccess,
  UpdateMovieFailure,
} from "./movieSlice";
import {
  CreateListsError,
  CreateListsStart,
  CreateListsSuccess,
  DeleteListsError,
  DeleteListsStart,
  DeleteListsSuccess,
  GetListsError,
  GetListsStart,
  GetListsSuccess,
  UpdateListFailure,
  UpdateListStart,
  UpdateListSuccess,
} from "./listSlice";
import jwtDecode from "jwt-decode";
import { AppDispatch } from "./store";
import { ListType } from "../../../front/src/context/listSlice";
import { MovieType } from "../../../front/src/context/movieSlice";

export type UserAdminType = {
  _id: string;
  isAdmin: boolean;
  username: string;
  password: string;
  email: string;
  fullName: string;
  isSubscribed: boolean;
};

export const login = async (
  user: UserAdminType,
  dispatch: AppDispatch,
  history: any
) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", {
      username: user.username,
      password: user.password,
    });

    if (res.data) {
      const userData: UserAdminType = jwtDecode(res.data.accessToken);
      if (userData.isAdmin) {
        dispatch(loginSuccess(res.data));
        localStorage.setItem("user", JSON.stringify(res.data));
        history.push("/");
      }
    } else {
      alert("you are not admin");
    }
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const logout = (history: any) => {
  localStorage.clear();
  history.push("/login");
};

export const fetchMovies = async (dispatch: AppDispatch) => {
  dispatch(GetMoviesStart());
  try {
    const res = await privateRequest.get("/movies/all");
    dispatch(GetMoviesSuccess(res.data));
  } catch (err) {
    dispatch(GetMoviesFailure());
  }
};

export const deleteMovie = async (dispatch: AppDispatch, id: string) => {
  dispatch(DeleteMovieStart());
  try {
    await privateRequest.delete("/movies/" + id);
    dispatch(DeleteMovieSuccess(id));
    window.location.reload();
  } catch (err) {
    dispatch(DeleteMovieFailure());
  }
};
export const CreateMovie = async (
  dispatch: AppDispatch,
  userInput: MovieType,
  history: any
) => {
  dispatch(CreateMovieStart());
  try {
    const res = await privateRequest.post("/movies/add", userInput);
    dispatch(CreateMovieSuccess(res.data));
    history.push("/movies");
  } catch (err) {
    dispatch(DeleteMovieFailure());
  }
};
export const updateMovie = async (
  id: string,
  userInput: MovieType,
  dispatch: AppDispatch
) => {
  dispatch(UpdateMovieStart());
  try {
    await privateRequest.put("/movies/" + id, userInput);
    dispatch(UpdateMovieSuccess(id));
  } catch (err) {
    dispatch(UpdateMovieFailure());
  }
};

export const deleteUser = async (id: string) => {
  try {
    await privateRequest.delete("/users/" + id);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};

export const createList = async (
  dispatch: AppDispatch,
  userInput: ListType
) => {
  dispatch(CreateListsStart());
  try {
    const res = await privateRequest.post("/lists/add", userInput);
    dispatch(CreateListsSuccess(res.data));
  } catch (err) {
    dispatch(CreateListsError());
  }
};

export const getLists = async (dispatch: AppDispatch) => {
  dispatch(GetListsStart());
  try {
    const res = await privateRequest.get("/lists/all");
    dispatch(GetListsSuccess(res.data));
  } catch (err) {
    dispatch(GetListsError());
  }
};

export const updateList = async (
  id: string,
  userInput: ListType,
  dispatch: AppDispatch
) => {
  dispatch(UpdateListStart());
  try {
    await privateRequest.put("/lists/" + id, userInput);
    dispatch(UpdateListSuccess(id));
  } catch (err) {
    dispatch(UpdateListFailure());
  }
};

export const deleteList = async (id: string, dispatch: AppDispatch) => {
  dispatch(DeleteListsStart());
  try {
    await privateRequest.delete("/lists/" + id);
    dispatch(DeleteListsSuccess(id));
  } catch (err) {
    dispatch(DeleteListsError());
  }
};

export const updateUser = async (
  user: UserAdminType,
  userInput: UserAdminType,
  history: any
) => {
  try {
    await privateRequest.put("/users/" + user._id, userInput);
    history.push("/users");
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (history: any) => {
  try {
    await privateRequest.post("/users/create");

    history.push("/users");
  } catch (err) {
    console.log(err);
  }
};
