import auth from "./auth/auth";

export default function combineReducers(state = {}, action) {
  return {
    auth: auth(state.auth, action)
  };
}
