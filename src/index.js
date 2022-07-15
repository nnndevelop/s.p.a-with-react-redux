import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import {BrowserRouter as Router } from "react-router-dom";

const cont = document.querySelector("#root");
const root = createRoot(cont);

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
