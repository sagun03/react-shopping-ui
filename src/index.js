import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store, { persistor } from "./redux/store";
import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
