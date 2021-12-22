import {
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from "../context/listSlice";
import { AppDispatch } from "../context/store";
import { privateRequest } from "./axios";

export const getRandomList = async (
  dispatch: AppDispatch,
  isSuggestion: boolean
) => {
  dispatch(getListsStart());
  let res;
  try {
    if (isSuggestion) {
      res = await privateRequest.get("/lists/random?suggestion=true");
      dispatch(getListsSuccess(res.data));
    } else {
      res = await privateRequest.get("/lists/random");
      dispatch(getListsSuccess(res.data));
    }
  } catch (error) {
    dispatch(getListsFailure());
  }
};
