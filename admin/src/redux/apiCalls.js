import { publicRequest, privateRequest } from "api";
import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import {
  GetMovieStart,
  GetMovieFailure,
  GetMovieSuccess,
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

export const login = async (user, dispatch, history) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);

    if (res.data) {
      const userData = jwtDecode(res.data.accessToken);
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

export const logout = (history) => {
  localStorage.clear();
  history.push("/login");
};

export const fetchMovies = async (dispatch) => {
  dispatch(GetMovieStart());
  try {
    const res = await privateRequest.get("/movies/all");
    dispatch(GetMovieSuccess(res.data));
  } catch (err) {
    dispatch(GetMovieFailure());
  }
};

export const deleteMovie = async (dispatch, id) => {
  dispatch(DeleteMovieStart());
  try {
    await privateRequest.delete("/movies/" + id);
    dispatch(DeleteMovieSuccess(id));
    window.location.reload();
  } catch (err) {
    dispatch(DeleteMovieFailure());
  }
};
export const CreateMovie = async (dispatch, userInput, history) => {
  dispatch(CreateMovieStart());
  try {
    const res = await privateRequest.post("/movies/add", userInput);
    dispatch(CreateMovieSuccess(res.data));
    history.push("/movies");
  } catch (err) {
    dispatch(DeleteMovieFailure());
  }
};
export const updateMovie = async (id, userInput, dispatch) => {
  dispatch(UpdateMovieStart());
  try {
    await privateRequest.put("/movies/" + id, userInput);
    dispatch(UpdateMovieSuccess(id));
  } catch (err) {
    dispatch(UpdateMovieFailure());
  }
};

export const deleteUser = async (id) => {
  try {
    await privateRequest.delete("/users/" + id);
    window.location.reload();
  } catch (err) {
    console.log(err);
  }
};

export const createList = async (dispatch, userInput) => {
  dispatch(CreateListsStart());
  try {
    const res = await privateRequest.post("/lists/add", userInput);
    dispatch(CreateListsSuccess(res.data));
  } catch (err) {
    dispatch(CreateListsError());
  }
};

export const getLists = async (dispatch) => {
  dispatch(GetListsStart());
  try {
    const res = await privateRequest.get("/lists/all");
    dispatch(GetListsSuccess(res.data));
  } catch (err) {
    dispatch(GetListsError());
  }
};

export const updateList = async (id, userInput, dispatch) => {
  dispatch(UpdateListStart());
  try {
    await privateRequest.put("/lists/" + id, userInput);
    dispatch(UpdateListSuccess(id));
  } catch (err) {
    dispatch(UpdateListFailure());
  }
};

export const deleteList = async (id, dispatch) => {
  dispatch(DeleteListsStart());
  try {
    await privateRequest.delete("/lists/" + id);
    dispatch(DeleteListsSuccess(id));
  } catch (err) {
    dispatch(DeleteListsError());
  }
};

export const updateUser = async (user, userInput, history) => {
  try {
    await privateRequest.put("/users/" + user._id, userInput, {
      headers: {
        authorization: JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    history.push("/users");
  } catch (err) {
    console.log(err);
  }
};

export const createUser = async (history) => {
  try {
    await privateRequest.post("/users/create");

    history.push("/users");
  } catch (err) {
    console.log(err);
  }
};
