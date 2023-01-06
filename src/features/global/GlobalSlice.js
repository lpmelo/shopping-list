import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lastList: [{ item: 1 }],
  pageNavigationIndex: 0,
};

const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    getLastList(state) {
      return state.lastList;
    },
    changePageNavigationIndex(state, action) {
      state.pageNavigationIndex = action.payload;
    },
  },
});

export const { getLastList, changePageNavigationIndex } = globalSlice.actions;
export default globalSlice.reducer;
