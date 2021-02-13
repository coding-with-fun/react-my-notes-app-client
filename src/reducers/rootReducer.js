import { combineReducers } from 'redux';
import { userDataReducer } from './userDataReducer';
import { togglePageReducer } from './togglePageReducer';
import { authenticationReducer } from './authenticationReducer';
import { userProfileReducer } from './userProfileReducer';

const rootReducer = combineReducers({
    toggleTab: togglePageReducer,
    userData: userDataReducer,
    auth: authenticationReducer,
    user: userProfileReducer,
});

export default rootReducer;
