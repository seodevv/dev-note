import { applyMiddleware, createStore } from "redux";
import rootReducer from "../features/reducers";
import { fetchData } from "../actions/todos";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";
import filtersReudcer from "../features/filters/filtersSlice";

const fetchMiddleware = (storeAPI) => (next) => (action) => {
  if (typeof action === "function") {
    return action(storeAPI.dispatch, storeAPI.getState);
  }
  return next(action);
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

// const store = createStore(rootReducer, undefined, composedEnhancer);

const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReudcer,
  },
});

store.dispatch(fetchData);

export default store;
