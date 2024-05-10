import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./slice";

const store = configureStore({
    reducer: {
        reduce: sliceReducer,
    }
})
export default store;