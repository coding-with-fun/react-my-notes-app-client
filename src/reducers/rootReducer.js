import { combineReducers } from "redux";
import { togglePageReducer } from "./togglePageReducer";

const rootReducer = combineReducers({
    toggleTab: togglePageReducer,
});

export default rootReducer;
