import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import {
  selectFilteredTodoIds,
  selectStatus,
  selectTodoIds,
} from "./todosSlice";
import TodoListItem from "./TodoListItem";
import Spinner from "../../components/Spinner";

const TodoList = () => {
  console.log("TodoList render");
  const status = useSelector(selectStatus);
  const todoIds = useSelector(selectFilteredTodoIds);

  let content;
  if (status === "loading") {
    content = <Spinner />;
  } else if (status === "failed") {
    return <h2>Network Error</h2>;
  } else {
    content = todoIds.map((todoId) => {
      return <TodoListItem key={todoId} id={todoId} />;
    });
  }
  return (
    <>
      <ul className="todo-list">{content}</ul>
    </>
  );
};

export default TodoList;
