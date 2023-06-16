import { createSelector } from "reselect";
import { StatusFilters } from "../filters/filtersSlice";

const initialState = {
  entities: {},
  status: "idle",
};

const getNextId = (todos) => {
  if (todos.length === 0) {
    return 0;
  }
  return Math.max(...todos.map((todo) => todo.id)) + 1;
};

export const ADD_TODO = "todos/addedTodo";
export const TOGGLE_TODO = "todos/toggleCompletedTodo";
export const ALL_COMPLETE_TODO = "todos/allCompletedTodos";
export const TODO_CHANGE_COLOR = "todos/ChangeTodoColor";
export const REMOVE_TODO = "todos/removeTodo";
export const REMOVE_COMPLETE_TODO = "todos/removeCompletedTodos";
export const FETCH_TODO = "todos/fetchTodos";
export const FETCH_TODO_LOADED = "todos/fetchLoadedTodos";
export const FETCH_ADD_TODO = "todos/fetchAddTodo";

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TODO: {
      const todoId = action.payload;
      const todo = state.entities[todoId];
      return {
        ...state,
        entities: {
          ...state.entities,
          [todoId]: { ...todo, completed: !todo.completed },
        },
      };
    }
    case ALL_COMPLETE_TODO: {
      const newEntities = { ...state.entities };
      Object.values(newEntities).forEach((todo) => {
        newEntities[todo.id] = {
          ...todo,
          completed: true,
        };
      });
      return {
        ...state,
        entities: newEntities,
      };
    }
    case TODO_CHANGE_COLOR: {
      const { id, color } = action.payload;
      const todo = state.entities[id];
      return {
        ...state,
        entities: {
          ...state.entities,
          [id]: {
            ...todo,
            color,
          },
        },
      };
    }
    case REMOVE_TODO: {
      const todoId = action.payload;
      const newEntities = { ...state.entities };
      delete newEntities[todoId];
      return {
        ...state,
        entities: newEntities,
      };
    }
    case REMOVE_COMPLETE_TODO: {
      const newEntities = { ...state.entities };
      Object.values(newEntities).forEach((todo) => {
        if (todo.completed) {
          delete newEntities[todo.id];
        }
      });
      return {
        ...state,
        entities: newEntities,
      };
    }
    case FETCH_TODO: {
      return { ...state, status: action.payload };
    }
    case FETCH_TODO_LOADED: {
      const newEntities = {};
      action.payload.forEach((todo) => {
        newEntities[todo.id] = todo;
      });
      return { ...state, entities: newEntities, status: "idle" };
    }
    case FETCH_ADD_TODO: {
      return {
        ...state,
        entities: { ...state.entities, [action.payload.id]: action.payload },
      };
    }
    default: {
      return state;
    }
  }
};

export default todosReducer;

export const selectStatus = (state) => state.todos.status;
export const selectTodosAll = (state) => state.todos.entities;
export const selectTodoIds = createSelector(
  (state) => state.todos.entities,
  (todos) => Object.keys(todos)
);
export const selectTodoById = (state, id) => state.todos.entities[id];
export const selectCountActive = createSelector(
  (state) => state.todos.entities,
  (todos) => Object.values(todos).filter((todo) => !todo.completed).length
);
export const selectFilteredTodos = createSelector(
  (state) => state.todos.entities,
  (state) => state.filters,
  (todos, filters) => {
    const { status, colors } = filters;
    const StatusAll = status === StatusFilters.All;
    const colorStatus = colors.length === 0;
    const newEntities = { ...todos };
    console.log("initial", newEntities);

    if (StatusAll && colorStatus) {
      console.log(todos);
      return todos;
    }
    if (StatusAll && !colorStatus) {
      Object.values(todos).forEach((todo) => {
        if (!colors.includes(todo.color)) {
          delete newEntities[todo.id];
        }
      });
      console.log(newEntities);
      return newEntities;
    }
    const completedStatus = status === StatusFilters.Completed;
    if (!StatusAll && colorStatus) {
      Object.values(todos).forEach((todo) => {
        if (Boolean(todo.completed) !== completedStatus) {
          delete newEntities[todo.id];
        }
      });
      console.log("completed", newEntities);
      return newEntities;
    }

    Object.values(todos).forEach((todo) => {
      if (
        Boolean(todo.completed) !== completedStatus ||
        !colors.includes(todo.color)
      ) {
        delete newEntities[todo.id];
      }
    });
    console.log(newEntities);
    return newEntities;
  }
);
export const selectFilteredTodoIds = createSelector(
  selectFilteredTodos,
  (filteredTodos) => Object.keys(filteredTodos)
);
