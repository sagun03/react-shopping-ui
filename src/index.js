import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "./redux/store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
