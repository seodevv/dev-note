import axios from "axios";
import {
  ADD_TODO,
  ALL_COMPLETE_TODO,
  REMOVE_COMPLETE_TODO,
  REMOVE_TODO,
  TODO_CHANGE_COLOR,
  TOGGLE_TODO,
  FETCH_TODO,
  FETCH_TODO_LOADED,
  FETCH_ADD_TODO,
} from "../features/todos/todosSlice";

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export const allCompletedTodo = () => {
  return {
    type: ALL_COMPLETE_TODO,
  };
};

export const changeColorTodo = (id, color) => {
  return {
    type: TODO_CHANGE_COLOR,
    payload: {
      id,
      color,
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVE_TODO,
    payload: id,
  };
};

export const removeCompletedTodo = () => {
  return {
    type: REMOVE_COMPLETE_TODO,
  };
};

export const fetchTodo = (status) => {
  return {
    type: FETCH_TODO,
    payload: status,
  };
};

export const fetchTodoLoaded = (todos) => {
  return {
    type: FETCH_TODO_LOADED,
    payload: todos,
  };
};

export const fetchAddTodo = (todo) => {
  return {
    type: FETCH_ADD_TODO,
    payload: todo,
  };
};

export const fetchData = async (dispatch, getState) => {
  dispatch(fetchTodo("loading"));
  try {
    const response = await axios.get(process.env.SERVER_URL + "/get/todos");
    dispatch(fetchTodoLoaded(response.data));
  } catch (error) {
    dispatch(fetchTodo("failed"));
    console.log(error);
  }
};

export const fetchAddData = (text) => async (dispatch, getState) => {
  try {
    const response = await axios.post(
      process.env.SERVER_URL + "/post/addTodo",
      { text }
    );
    dispatch(fetchAddTodo(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const fetchToggleCompleted = (id) => async (dispatch, getState) => {
  try {
  } catch (error) {
    console.error(error);
  }
};
