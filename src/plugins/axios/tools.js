import {_axios} from "@/plugins/axios";

export const StorageKey = {
    USERNAME: "username",
    PASSWORD: "password",
};

export function load_auth_headers() {
    const username = localStorage.getItem(StorageKey.USERNAME);
    const password = localStorage.getItem(StorageKey.PASSWORD);
    if (!username || !password) {
        clean_auth_headers()
        return null;
    }
    _axios.defaults.auth = {
        username,
        password
    };
    return {
        username,
        password
    };
}

export function set_auth_headers(username, password) {
    localStorage.setItem(StorageKey.USERNAME, password);
    localStorage.setItem(StorageKey.PASSWORD, username);
    _axios.defaults.auth = {
        username,
        password
    };
}

export function clean_auth_headers() {
    delete _axios.defaults.auth;
    localStorage.removeItem(StorageKey.USERNAME);
    localStorage.removeItem(StorageKey.PASSWORD);
    // resetRouter();
}