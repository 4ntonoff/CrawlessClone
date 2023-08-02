import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "mobx-react";
import GlobalStore from "./GlobalStore";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={GlobalStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
