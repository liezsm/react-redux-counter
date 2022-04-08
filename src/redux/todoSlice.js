import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const res = await fetch(
      "https://my-json-server.typicode.com/liezsm/booklist-app-json-ver2/todos"
    );
    if (res.ok) {
      const todos = await res.json();
      return { todos };
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    // getTodos: (state, action) => {
    //   state.push(...action.payload.data);
    // },
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };

      state.push(newTodo);
    },
    toggleComplete: (state, action) => {
      return state.map((todo) =>
        todo.id == action.payload.id
          ? { ...todo, completed: action.payload.completed }
          : todo
      );
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
