import { combineReducers } from "redux";
import errors from "./errors/errors";
import session from "./session/session";

export default combineReducers({
  session,
  errors
});