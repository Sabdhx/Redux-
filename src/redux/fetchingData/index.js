import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the async thunk for fetching data
export const fetchData = createAsyncThunk(
    'fetchingData/fetchData', // Action type
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        return data; // The payload of the fulfilled action
    }
);

// Define the initial state
const initialState = {
    value: null, // To store the fetched data
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null // To store error messages, if any
};

// Create the slice
const fetchingSlice = createSlice({
    name: 'fetchingData',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading'; // Set loading status
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded'; // Set succeeded status
                state.value = action.payload; // Set fetched data
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed'; // Set failed status
                state.error = action.error.message; // Set error message
            });
    }
});

export default fetchingSlice.reducer;
