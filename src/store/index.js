import { createStore, applyMiddleware } from "redux";
import soundsMiddleware from "redux-sounds";
import thunk from "redux-thunk";
import localStore from "store";
import reducer from "./reducer";

export const soundsData = {
  notification: "./audio/notification.mp3"
};

const middleware = [thunk, soundsMiddleware(soundsData)];
let initialState;

if (localStore.get("state")) {
  initialState = localStore.get("state");
}

function configureStore() {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
  );

  return store;
}

export default configureStore();
