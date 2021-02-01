import { combineReducers } from "redux";
import { toggleReducer } from "./togglePageReducer";

const rootReducer = combineReducers({
    toggleTab: toggleReducer,
});

export default rootReducer;
