import axios from "axios";
/*
 * define action name
 */

/*
 * define async action name
 */
export const FETCH_USER = "fetch_user";
/*
 * state init (scheduledPrice in redux)
 */

export const initialState = {
  user: null
};

/*
 * auth reducer
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return Object.assign({}, state, {
        user: action.payload || false
      });
    default:
      return state;
  }
};

/*
 * export sync packaged dispatch
 */

/*
 * export async packaged dispatch
 */
export const asyncFetchUser = () => async dispatch => {
  const res = await axios.get("/user");
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};
