import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, fetchAddData } from "../../actions/todos";

const Header = () => {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("idle");
  const dispatch = useDispatch();

  const onTextChanged = (e) => setText(e.target.value);

  const onTextKeyDown = async (e) => {
    const trimmedText = e.target.value.trim();
    if (e.code === "Enter" && trimmedText) {
      setStatus("loading");
      await dispatch(fetchAddData(trimmedText));
      setStatus("idle");
      setText("");
    }
  };

  let isLoading = status === "loading";
  let placeholder = isLoading ? "" : "What need to be done?";
  let loader = isLoading ? <div className="loader" /> : null;

  return (
    <>
      <input
        className="new-todo"
        type="text"
        placeholder={placeholder}
        autoFocus={true}
        value={text}
        onChange={onTextChanged}
        onKeyDown={onTextKeyDown}
        disabled={isLoading}
      />
      {loader}
    </>
  );
};

export default Header;
