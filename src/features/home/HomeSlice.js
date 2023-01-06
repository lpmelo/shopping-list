import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  greetingMessages: [],
  username: "",
};

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    getAllGreetingMessages(state) {
      return state.greetingMessages;
    },
    changeGreetingMessages(state, action) {
      state.greetingMessages = action.payload;
    },
    addNewGreetingMessage(state, action) {
      state.greetingMessages.push(action.payload);
    },
    changeUserName(state, action) {
      state.username = action.payload;
    },
  },
});

export const {
  getAllGreetingMessages,
  changeGreetingMessages,
  addNewGreetingMessage,
  changeUserName,
} = homeSlice.actions;
export default homeSlice.reducer;
