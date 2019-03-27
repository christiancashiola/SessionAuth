import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/root";

export default preloadedState => (
  createStore(
    reducer, 
    preloadedState, 
    applyMiddleware(thunk)
  )
);