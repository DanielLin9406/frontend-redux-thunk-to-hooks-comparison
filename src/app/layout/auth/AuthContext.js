import React from "react";
import noop from "lodash/noop";
import { initialState } from "../../../modules/auth/auth";

export default React.createContext({
  ...initialState,
  dispatch: noop
});
