import { combineReducers } from 'redux';
import { userDataReducer } from './userDataReducer';
import { togglePageReducer } from './togglePageReducer';
import { authenticationReducer } from './authenticationReducer';

const rootReducer = combineReducers({
    toggleTab: togglePageReducer,
    userData: userDataReducer,
    auth: authenticationReducer,
});

export default rootReducer;
