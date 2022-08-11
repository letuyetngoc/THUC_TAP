import { combineReducers } from "redux";
import AdminReducer from "./reducer/AdminReducer";
import UseReducer from "./reducer/UserReducer";

export const rootReducer = combineReducers({
    UseReducer,
    AdminReducer,
})