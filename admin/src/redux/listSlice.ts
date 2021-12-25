import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  InitialStateList,
  ListType,
} from "../../../front/src/context/listSlice";

const initialState: InitialStateList = {
  pending: false,
  error: false,
  lists: [],
};

export const listSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {
    CreateListsStart: (state) => {
      state.pending = true;
    },
    CreateListsSuccess: (state, action: PayloadAction<ListType>) => {
      state.pending = false;
      state.lists = [...state.lists, action.payload];
    },
    CreateListsError: (state) => {
      state.pending = false;
      state.error = true;
    },
    GetListsStart: (state) => {
      state.pending = true;
    },
    GetListsSuccess: (state, action: PayloadAction<ListType[]>) => {
      state.pending = false;
      state.lists = action.payload;
    },
    GetListsError: (state) => {
      state.pending = false;
      state.error = true;
    },
    DeleteListsStart: (state) => {
      state.pending = true;
    },
    DeleteListsSuccess: (state, action: PayloadAction<string>) => {
      state.pending = false;
      state.lists = state.lists.filter((list) => list._id !== action.payload);
    },
    DeleteListsError: (state) => {
      state.pending = false;
      state.error = true;
    },
    UpdateListStart: (state) => {
      state.pending = true;
    },
    UpdateListSuccess: (state, action: PayloadAction<string>) => {
      state.pending = false;
      state.lists.map((list) => list._id === action.payload && action.payload);
    },
    UpdateListFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default listSlice.reducer;
export const {
  GetListsStart,
  GetListsSuccess,
  GetListsError,
  UpdateListStart,
  UpdateListSuccess,
  UpdateListFailure,
  CreateListsStart,
  CreateListsSuccess,
  CreateListsError,
  DeleteListsError,
  DeleteListsStart,
  DeleteListsSuccess,
} = listSlice.actions;
