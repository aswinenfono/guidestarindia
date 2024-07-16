import axios from 'axios';
import { baseApi } from '../Config';

export const actionHandler = (payload) => {
    // Headers
    axios.defaults.headers['Content-Type'] = 'application/json';
    axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

    // Token for authentication 
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }

    payload.baseURL = baseApi

    return new Promise((resolve, reject) => {
        axios(payload)
            .then((response) => {
                console.log(response)
                if (response.data.status_code >= 200 && response.data.status_code < 300) {
                    resolve(response);
                } else {
                    reject(response);
                }
            })
            .catch((err) => {
                reject(err);
            });
    });
};
axios.interceptors.response.use(undefined, (err) => {
    console.log("err>>>", err)
    let statusCode = err.status_code;
    if (statusCode === undefined) {
        // Server needs to specify CORS headers in the response
        // Basically `ACCESS-CONTROL-ALLOW-ORIGIN: *`
        // Otherwise, these kinda issues happen
        const lineSplit = err.toString().split('\n')[0].split(' ');
        statusCode = lineSplit[lineSplit.length - 1];
    }
    return new Promise(() => {
        if (statusCode === 401 && err.config && !err.config.__isRetryRequest) {
            // Got an unauthorized, logout the user
            localStorage.clear();
            window.location.pathname = '/auth/sign-in';
        }

        throw err;
    });
});
