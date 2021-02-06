import { combineReducers } from "redux";
import { userDataReducer } from "./userDataReducer";
import { togglePageReducer } from "./togglePageReducer";

const rootReducer = combineReducers({
    toggleTab: togglePageReducer,
    userData: userDataReducer,
});

export default rootReducer;
