const ACCESS_TOKEN      = "access_token";
const REFRESH_TOKEN     = 'refresh_token';
const EXPIRE_AT         = 'expires_at';
const LOGGED_USER   = 'logged_user';

export const getToken = () => {
    return window.localStorage.getItem(ACCESS_TOKEN);
};

export const saveToken = token => {
    window.localStorage.setItem(ACCESS_TOKEN, token);
};
export const saveLoggedUser = type => {
    window.localStorage.setItem(LOGGED_USER, type);

};

export const getLoggedUser = () => {

    return window.localStorage.getItem(LOGGED_USER);
};

export const destroyToken = () => {
    window.localStorage.removeItem(ACCESS_TOKEN);
    window.localStorage.removeItem(REFRESH_TOKEN);
    window.localStorage.removeItem(EXPIRE_AT);
    window.localStorage.removeItem(LOGGED_USER);
};

export default {getToken, saveToken, destroyToken,saveLoggedUser,getLoggedUser};
