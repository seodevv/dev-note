import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";

const start = () => {
  ReactDOM.render(
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>,
    document.querySelector("#root")
  );
};

start();
