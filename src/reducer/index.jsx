import { combineReducers } from "redux";
import changeCount from "./UpDown";

const rootReducer = combineReducers({
  changeCount,
});

export default rootReducer;
