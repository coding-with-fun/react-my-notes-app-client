import axios from 'axios';
import config from '../config/appConfigs';

const GET_USER_DETAILS = config.USERS_ROOT + '/details';

export function getUserDetails(token) {
    const headers = {
        'x-auth-token': token,
    };
    const data = axios.get(GET_USER_DETAILS, {
        headers,
    });
    return data;
}
