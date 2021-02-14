import axios from 'axios';
import config from '../config/appConfigs';

const headerConfig = {
    headers: {
        'x-auth-token': localStorage.getItem('user_token'),
    },
};

const GET_USER_DETAILS = config.USERS_ROOT + '/details';

export function getUserDetails() {
    const data = axios.get(GET_USER_DETAILS, headerConfig);
    return data;
}
