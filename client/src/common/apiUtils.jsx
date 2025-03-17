import axios from 'axios';

// Sử dụng Redux
let auth = {
    username: '',
    password: ''
};

export function setAuthCredentials(username, password) {
    auth.username = username;
    auth.password = password;
}

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

instance.interceptors.request.use(
    function (config) {
        if (config.url.includes('/api/users')) {
            config.auth = {
                username: auth.username,
                password: auth.password
            };
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default instance;