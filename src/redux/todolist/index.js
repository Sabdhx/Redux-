import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoListSlice = createSlice({
    name: "todoListData",
    initialState,
    reducers: {
        adding: (state, action) => {
            state.push({ value: action.payload, id: state.length + 1 });
        },
        deleting: (state, action) => {
            const idToDelete = action.payload;
            const index = state.findIndex(item => item.id === idToDelete);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        editing: (state, action) => {
            const { id, newValue } = action.payload;
            const item = state.find(item => item.id === id);
            if (item) {
                item.value = newValue;
            }
        }
    }
});

export const { adding, deleting, editing } = todoListSlice.actions;
export default todoListSlice.reducer;
