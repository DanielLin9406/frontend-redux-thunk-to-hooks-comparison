import React, { useReducer } from "react";
import AuthContext from "./AuthContext";
import authReducer, { initialState } from "../../../modules/auth/auth";

export default function AuthProvider({ children }) {
  const [authState, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ ...authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
