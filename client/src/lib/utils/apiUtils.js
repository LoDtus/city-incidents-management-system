import axios from 'axios';
import endpoints from "@/lib/configs/endpoints.json";

// Sử dụng Redux
let auth = {
    username: null,
    password: null,
};

export function setAuth(username, password) {
    auth.username = username;
    auth.password = password;
}

function createAxiosInstance(baseURL) {
    return axios.create({ baseURL });
}

function requiresAuth(method, url) {
    return (( method === "get"  && !endpoints.noAuthGetEndpoints.some(ignore => url.includes(ignore)) )
        ||  ( method === "post" && !endpoints.noAuthPostEndpoints.some(ignore => url.includes(ignore)) )
        ||  ( method === "put")
        ||  ( method === "delete"));
}

function setupRequestInterceptor(instance) {
    instance.interceptors.request.use(
        function (config) {
            // console.log(config.method);
            // console.log(config.url);
            // console.log(auth.username);
            // console.log(auth.password);
            if (requiresAuth(config.method, config.url)) {
                console.log("auth");
                config.auth = {
                    username: auth.username,
                    password: auth.password,
                };
            }
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );
}

function setupResponseInterceptor(instance) {
    instance.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            const statusList = [400, 401, 403, 404]
            if (error.response && statusList.includes(error.response.status)) {
                return {data: error.response.data};
            }
            return Promise.reject(error);
        }
    );
}

const instance = createAxiosInstance('http://localhost:8080');
setupRequestInterceptor(instance);
setupResponseInterceptor(instance);
export default instance;