 

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = compose(composeWithDevTools(), applyMiddleware(thunk),(window._REDUX_DEVTOOLS_EXTENSION && window._REDUX_DEVTOOLS_EXTENSION() || compose));
const initialState = {};

const store = createStore(rootReducer, initialState, composedEnhancer);

export default store;


// @flow