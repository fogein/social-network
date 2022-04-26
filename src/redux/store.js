import { combineReducers, createStore } from "redux";
import { authReducer } from "./reducers/authReducer";
import { dialogsReducer } from "./reducers/dialogsReducer";
import { profileReducer } from "./reducers/profileReducer";
import { usersReducer } from "./reducers/usersReducer";

let reducers = combineReducers({
  profilePage:profileReducer,
  dialogsPage:dialogsReducer,
  usersPage:usersReducer,
  auth:authReducer,
});
export let store = createStore(reducers);
window.store = store