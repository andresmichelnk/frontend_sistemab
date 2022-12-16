import {_axios} from "@/plugins/axios";
import {
    clean_auth_headers,
    load_auth_headers,
    set_auth_headers
} from "@/plugins/axios/tools";
import {reactive} from "vue";

export const session = new reactive({
    me: null,
    username: null,
    password: null,
    roles: [],
    enable: true
})

async function login(username, password) {
    let {roles, enable} = await _axios.post(
        '/auth/login', {
            username,
            password
        }).then(res => res.data)

    session.username = username;
    session.password = password;
    session.roles = roles;
    session.enable = enable;
    set_auth_headers(username, password)
}

async function try_login() {
    let access = load_auth_headers()
    if (access) {
        let {
            username,
            password
        } = access
        session.username = username;
        session.password = password;
        return login(
            username,
            password
        )
    }
    throw new Error('try logging failed...');
}

async function logout() {
    clean_auth_headers()
    session.me = null;
}

export {
    login,
    try_login,
    logout
}