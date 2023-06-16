import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodoById } from "./todosSlice";
import { changeColorTodo, removeTodo, toggleTodo } from "../../actions/todos";
import TimesSolid from "./times-solid.svg";
import { availableColors } from "../filters/filtersSlice";

const ColorPicker = ({ id, color }) => {
  const dispatch = useDispatch();
  const renderedColorsFilters = availableColors.map((c) => {
    return (
      <option key={c} value={c}>
        {c.substring(0, 1).toUpperCase() + c.substring(1)}
      </option>
    );
  });
  const onChangeTodoClor = (e) => {
    dispatch(changeColorTodo(id, e.target.value));
  };
  return (
    <select
      className="colorPicker"
      style={{ color }}
      value={color}
      onChange={onChangeTodoClor}
    >
      <option value=""></option>
      {renderedColorsFilters}
    </select>
  );
};

const TodoListItem = ({ id }) => {
  console.log("TodoListItem render");
  const todo = useSelector((state) => selectTodoById(state, id));
  const dispatch = useDispatch();
  const { text, completed, color } = todo;

  const onChangeCompleted = () => {
    dispatch(toggleTodo(id));
  };

  const onClickRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <li>
        <div className="view">
          <div className="segment label">
            <input
              className="toggle"
              type="checkbox"
              checked={completed}
              onChange={onChangeCompleted}
            />
            <div className="todo-text">{text}</div>
          </div>
          <div className="segment buttons">
            <ColorPicker id={id} color={color} />
            <button className="destroy" onClick={onClickRemoveTodo}>
              <TimesSolid />
            </button>
          </div>
        </div>
      </li>
    </>
  );
};

export default TodoListItem;
