import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../../actions/session";

export default (state = null, { type, user }) => {
  Object.freeze(state);
  switch (type) {
    case RECEIVE_CURRENT_USER:
      return user;
    case LOGOUT_CURRENT_USER:
      return null;
    default:
      return state;
  }
};