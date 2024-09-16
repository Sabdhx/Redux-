import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "../redux/addingNsubtracting/index.js"; // Ensure the path is correct
import fetchingDataReducer from "../redux/fetchingData/index.js"; // Adjust the path as necessary
import data from "../redux/todolist/index.js"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fetchingData: fetchingDataReducer,
    todoListData: data
  },
});