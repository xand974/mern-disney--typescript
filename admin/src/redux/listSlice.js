import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "lists",
  initialState: {
    lists: [],
    pending: false,
    error: false,
  },
  reducers: {
    CreateListsStart: (state) => {
      state.pending = true;
    },
    CreateListsSuccess: (state, action) => {
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
    GetListsSuccess: (state, action) => {
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
    DeleteListsSuccess: (state, action) => {
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
    UpdateListSuccess: (state, action) => {
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
