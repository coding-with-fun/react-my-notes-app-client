const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

const config = {
    BASE_URL: baseURL,
    USERS_ROOT: baseURL + '/user',
    TODO_ROOT: baseURL + '/todo',
    NOTE_ROOT: baseURL + '/note',
};

export default config;
