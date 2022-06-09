import axios from "axios";
console.log(process.env);
var API_URL = process.env.NODE_ENV === "development" ?
    process.env.REACT_APP_PROD_DOCKER_BACKEND_API_URL ||
        process.env.REACT_APP_DEV_BACKEND_API_URL :
    process.env.REACT_APP_PROD_BACKEND_API_URL;
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.login = function (email, password, rememberMe) {
        console.log(email, password, rememberMe);
        return axios
            .post(API_URL + "/auth/login", {
            email: email,
            password: password,
            rememberMe: rememberMe,
        })
            .then(function (response) {
            console.log(response);
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem("user");
    };
    AuthService.prototype.register = function (username, email, password, verifyPassword) {
        return axios.post(API_URL + "/registration/register", {
            username: username,
            email: email,
            password: password,
            verifyPassword: verifyPassword
        });
    };
    AuthService.prototype.getCurrentUser = function () {
        // TODO: enable when i start
        // const userStr = localStorage.getItem("user");
        // if (userStr) return JSON.parse(userStr);
        return null;
    };
    return AuthService;
}());
export default new AuthService();
