import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice";

const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});
export default store;
