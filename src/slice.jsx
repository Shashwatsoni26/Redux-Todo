import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "counterSlice",
  initialState: {
    counter: 0,
  },
  reducers: {
    incrementCounter: function (state, action) {
      state.counter = state.counter + 1;
    },
    decrementCounter: function (state, action) {
      state.counter = state.counter - 1;
    },
  },
});

export const { incrementCounter, decrementCounter } = slice.actions;
const counterReducer = slice.reducer;
export default counterReducer;
