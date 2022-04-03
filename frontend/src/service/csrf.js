import ApiService from "api.service";
import Cookie from "js-cookie";

export default {
    getCookie() {
        let token = Cookie.get("XSRF-TOKEN");

        if (token) {
            return new Promise(resolve => {
                resolve(token);
            });
        }

        return ApiService.get("/csrf-cookie");
    }
};
