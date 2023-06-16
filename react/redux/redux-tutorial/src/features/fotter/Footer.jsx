import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatusFilters, availableColors } from "../filters/filtersSlice";
import { colorFilterChanged, statusFilterChanged } from "../../actions/filters";
import { allCompletedTodo, removeCompletedTodo } from "../../actions/todos";
import { selectCountActive } from "../todos/todosSlice";

const RemainingTodos = ({ count }) => {
  return (
    <>
      <div className="todo-count">
        <h5>Remaining Todos</h5>
        <span>
          <strong>{count}</strong> items left
        </span>
      </div>
    </>
  );
};

const StatusFilter = ({ status, onChange }) => {
  const renderedFilters = Object.keys(StatusFilters).map((filter) => {
    const classname = status === filter ? "selected" : "";

    return (
      <li key={filter}>
        <button className={classname} onClick={() => onChange(filter)}>
          {filter}
        </button>
      </li>
    );
  });

  return (
    <div className="filters statusFilters">
      <h5>Filter by Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  );
};

const ColorFilters = ({ colors, onChange }) => {
  const renderedColorFilters = availableColors.map((color) => {
    const checked = colors.includes(color);
    const onCheckedColor = () => {
      onChange(color, checked ? "removed" : "added");
    };
    return (
      <label key={color}>
        <input
          type="checkbox"
          name={color}
          checked={checked}
          onChange={onCheckedColor}
        />
        <span className="color-block" style={{ backgroundColor: color }}></span>
        {color.substring(0, 1).toUpperCase() + color.substring(1)}
      </label>
    );
  });
  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSelection">{renderedColorFilters}</form>
    </div>
  );
};

const Footer = () => {
  const dispatch = useDispatch();

  const todosRemaining = useSelector(selectCountActive);

  const { status, colors } = useSelector((state) => state.filters);

  const onChangeFiltersStatus = (filter) => {
    dispatch(statusFilterChanged(filter));
  };

  const onChangeFiltersColors = (color, changeType) => {
    dispatch(colorFilterChanged(color, changeType));
  };

  const onClickTodosCompletedAll = () => {
    dispatch(allCompletedTodo());
  };

  const onClickTodosCompltedRemove = () => {
    dispatch(removeCompletedTodo());
  };

  return (
    <>
      <footer className="footer">
        <div className="actions">
          <h5>Actions</h5>
          <button className="button" onClick={onClickTodosCompletedAll}>
            Mark All Completed
          </button>
          <button className="button" onClick={onClickTodosCompltedRemove}>
            Clear Completed
          </button>
        </div>
        <RemainingTodos count={todosRemaining} />
        <StatusFilter status={status} onChange={onChangeFiltersStatus} />
        <ColorFilters colors={colors} onChange={onChangeFiltersColors} />
      </footer>
    </>
  );
};

export default Footer;
