const ACCESS_TOKEN      = "access_token";
const REFRESH_TOKEN     = 'refresh_token';
const EXPIRE_AT         = 'expires_at';

export const getToken = () => {
    return window.localStorage.getItem(ACCESS_TOKEN);
};

export const saveToken = token => {
    window.localStorage.setItem(ACCESS_TOKEN, token);
};

export const destroyToken = () => {
    window.localStorage.removeItem(ACCESS_TOKEN);
    window.localStorage.removeItem(REFRESH_TOKEN);
    window.localStorage.removeItem(EXPIRE_AT);
};

export default {getToken, saveToken, destroyToken};
