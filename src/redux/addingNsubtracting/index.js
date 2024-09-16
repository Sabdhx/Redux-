import { createSlice } from "@reduxjs/toolkit";

const initialState = { // Corrected typo here
    value: 0
};

const counterSlice = createSlice({
    name: "counter",
    initialState, // Corrected typo here
    reducers: {
        increment: (state) => {
            state.value += 1; // Correctly update state
        },
        decrement: (state) => {
            state.value -= 1; // Correctly update state
        }
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
