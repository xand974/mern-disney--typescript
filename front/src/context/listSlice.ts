import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ListType = {
  _id: string;
  content: string[];
  title: string;
  type: string;
  genre: string;
};

type InitialStateList = {
  pending: boolean;
  error: boolean;
  lists: ListType[];
};

const initialState: InitialStateList = {
  pending: false,
  error: false,
  lists: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    getListsStart: (state) => {
      state.pending = true;
    },
    getListsSuccess: (state, action: PayloadAction<ListType[]>) => {
      state.pending = false;
      state.lists = action.payload;
    },
    getListsFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export default listSlice.reducer;
export const { getListsStart, getListsSuccess, getListsFailure } =
  listSlice.actions;
