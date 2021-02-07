import axios from 'axios';
import config from '../config/appConfigs';

const USER_SIGN_IN = config.BASE_URL + '/signin';

export function userSignIn(body) {
    const data = axios.post(USER_SIGN_IN, body);
    return data;
}
