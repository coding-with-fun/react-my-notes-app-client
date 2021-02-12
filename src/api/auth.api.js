import axios from 'axios';
import config from '../config/appConfigs';

const USER_SIGN_IN = config.BASE_URL + '/signin';
const USER_SIGN_UP = config.BASE_URL + '/signup';

export function userSignIn(body) {
    const data = axios.post(USER_SIGN_IN, body);
    return data;
}

export function userSignUp(body) {
    const data = axios.post(USER_SIGN_UP, body);
    return data;
}
