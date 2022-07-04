import axios from "axios";

const URL = "https://api-my-wallet-j.herokuapp.com",
    SIGNUP_URL = URL + "/register",
    LOGIN_URL = URL + "/login";

export function login(userLogin) {
    const promise = axios.post(LOGIN_URL, userLogin);
    return promise;
}

export function register(newUser) {
    const promise = axios.post(SIGNUP_URL, newUser);
    return promise;
}