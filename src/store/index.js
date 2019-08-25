import { createStore, applyMiddleware, compose } from "redux";
import api from "../services/api";
import axiosMiddleware from "redux-axios-middleware";
import storeSynchronize from "redux-localstore";

import reducers from "./reducers";

// redux devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middlewares = [axiosMiddleware(api)];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

// sync localstorage
storeSynchronize(store);

export default store;
