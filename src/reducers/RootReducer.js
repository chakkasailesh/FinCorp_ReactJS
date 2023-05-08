import LoginReducer from "./LoginReducer";
import { combineReducers } from "redux";
const RootReducer = combineReducers({
  LoginReducer,
});
export default RootReducer;
