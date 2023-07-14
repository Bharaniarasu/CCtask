import { combineReducers, configureStore } from "@reduxjs/toolkit";

import ScriptReducer from "../slices/ScriptSlice";
import AuthReducer from "../slices/AuthSlice";

const reducer = combineReducers({
  ScriptState: ScriptReducer,
  AuthState: AuthReducer,
});
export default configureStore({
  reducer,
});
