import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "Todoslice",
    initialState: {
        value: "",
        tasks: [],
    },
    reducers: {
        setInputValue: function (state, action) {
            state.value = action.payload;
        },
        handleSubmit: function (state, action) {
            state.tasks = [...state.tasks, state.value];
            state.value = "";
        },
        handleChange: function (state, action) {
            state.value = action.payload;
        },
        handleDelete: function (state, action) {
            state.tasks = state.tasks.filter((task, ind) => ind !== action.payload);
        },
        handleEdit: function (state, action) {
            const { index, value } = action.payload;
            state.tasks[index] = value;
        },
    },
});

export const { setInputValue, handleChange, handleSubmit, handleDelete, handleEdit } = slice.actions;

const sliceReducer = slice.reducer;
export default sliceReducer;
