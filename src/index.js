import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import localStore from "store";
import App from "./App";
import store from "./store/index";
import { pauseTimer } from "./store/actions";
store.subscribe(() => {
  localStore.set("state", store.getState());
});

window.onbeforeunload = () => {
  store.dispatch(pauseTimer(store.getState().intervalId));
};

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
