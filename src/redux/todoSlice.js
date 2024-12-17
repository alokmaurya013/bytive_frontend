// src/redux/todoSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action to fetch all tasks
export const fetchTasks = createAsyncThunk("todos/fetchTasks", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data.slice(0, 10); // Limit to first 10 tasks
});

// Async action to update a task
export const updateTask = createAsyncThunk("todos/updateTask", async (task) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${task.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }
  );
  const data = await response.json();
  return data;
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    tasks: [],
    status: "idle",
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const updatedTask = action.payload;
        const existingTask = state.tasks.find((task) => task.id === updatedTask.id);
        if (existingTask) {
          existingTask.title = updatedTask.title;
          existingTask.completed = updatedTask.completed;
        }
      });
  },
});

export default todoSlice.reducer;
