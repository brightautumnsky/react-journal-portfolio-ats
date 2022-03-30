import { combineReducers } from "redux";
import userStore from "./user_reducer";
import journal from "./journal_reducer";
import set from "./settings_reducer";

const rootReducer = combineReducers({
  userStore,
  journal,
  set,
});

export default rootReducer;
