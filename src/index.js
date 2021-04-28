import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Root from "./components/root";
import store from "./redux";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
