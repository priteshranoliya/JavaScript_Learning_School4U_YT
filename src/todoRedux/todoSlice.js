import { createSlice } from "@reduxjs/toolkit";

let initialState = [
  
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      //   state.value.title = action.payload.title;
      //   state.value.desc = action.payload.desc;
      const title = action.payload.title;
      const desc = action.payload.desc;
      const newTodo = {
        id: Date.now(),
        title: title,
        desc: desc,
      };
      state.push(newTodo);
      if (localStorage.getItem("todoArr")) {
        const oldTodosArr = JSON.parse(localStorage.getItem("todoArr"));
        const newTodosArr = [...oldTodosArr, newTodo];
        localStorage.setItem("todoArr", JSON.stringify(newTodosArr));
      } else {
        const newTodoArr = [newTodo];
        localStorage.setItem("todoArr", JSON.stringify(newTodoArr));
      }
    },
    updateTodo: (state, action) => {
      //   state.value.title = action.payload.title;
      //   state.value.desc = action.payload.desc;
      const payloadId = action.payload.id;
      const payloadTitle = action.payload.title;
      const payloadDesc = action.payload.desc;

      if (localStorage.getItem("todoArr")) {
        const oldTodosArr = JSON.parse(localStorage.getItem("todoArr"));
        const toBeUpdateTodoIdx = oldTodosArr.findIndex(
          (item) => item.id === payloadId
        );
        const newUpdatedTodo = {
          id: payloadId,
          title: payloadTitle,
          desc: payloadDesc,
        };
        oldTodosArr.splice(toBeUpdateTodoIdx, 1, newUpdatedTodo);
        localStorage.setItem("todoArr", JSON.stringify(oldTodosArr));
      }
    },
    deleteTodo: (state, action) => {
      const deleteTodoId = action.payload;
      if (localStorage.getItem("todoArr")) {
        const oldTodosArr = JSON.parse(localStorage.getItem("todoArr"));
        const newUpdatedTodos = oldTodosArr.filter(
          (item) => item.id !== deleteTodoId
        );
        localStorage.setItem("todoArr", JSON.stringify(newUpdatedTodos));
      }
    },
    getTodos: (state) => {
      if (localStorage.getItem("todoArr")) {
        const oldTodosArr = JSON.parse(localStorage.getItem("todoArr"));
        state = oldTodosArr;
      }
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, getTodos, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
