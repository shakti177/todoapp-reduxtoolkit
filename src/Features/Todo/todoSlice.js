import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todotask: [{ id: 1, name: "Dummy Task" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const task = {
        id: nanoid(),
        name: action.payload,
      };
      state.todotask.push(task);
    },
    removeTask: (state, action) => {
      state.todotask = state.todotask.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addTask, removeTask } = todoSlice.actions;

export default todoSlice.reducer;
