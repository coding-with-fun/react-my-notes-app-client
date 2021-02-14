import axios from 'axios';
import config from '../config/appConfigs';

const headerConfig = {
    headers: {
        'x-auth-token': localStorage.getItem('user_token'),
    },
};

const ADD_TODO = config.TODO_ROOT + '/create';
const UPDATE_TODO = config.TODO_ROOT + '/update';

export function addToDo(body) {
    const data = axios.post(ADD_TODO, body, headerConfig);
    return data;
}

export function toggleToDo(id, body) {
    const data = axios.put(UPDATE_TODO + `/id=${id}`, body, headerConfig);
    return data;
}
