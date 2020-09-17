import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import createRootReducer from "./root-reducer";

let store;
const initialState = {};

if (process.env.NODE_ENV === "development") {
  store = createStore(
    createRootReducer(),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
} else {
  store = createStore(
    createRootReducer(),
    initialState,
    compose(applyMiddleware(thunk))
  );
}

export default store;
