import {
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from "../context/listSlice";
import { AppDispatch } from "../context/store";
import { privateRequest } from "./axios";

export const getRandomList = async (dispatch: AppDispatch) => {
  dispatch(getListsStart());
  try {
    const res = await privateRequest.get("/lists/random");
    dispatch(getListsSuccess(res.data));
  } catch (error) {
    dispatch(getListsFailure());
  }
};
