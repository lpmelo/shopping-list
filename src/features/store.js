import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./global/GlobalSlice";
import HomeSlice from "./home/HomeSlice";

export const globalStore = configureStore({
  reducer: {
    global: GlobalSlice,
    homePage: HomeSlice,
  },
});
