import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app/App";
import createStore from "./store";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const { store } = createStore();
const rootDom = document.getElementById("root");
const Application = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(Application, rootDom);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
