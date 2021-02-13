import axios from 'axios';
import config from '../config/appConfigs';

const ADD_TODO = config.TODO_ROOT + '/create';

export function addToDo(body, token) {
    const headers = {
        'x-auth-token': token,
    };
    const data = axios.post(ADD_TODO, body, {
        headers,
    });
    return data;
}
