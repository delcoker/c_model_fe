import axios from 'axios';
import authHeader from './auth-header';
var API_URL = process.env.NODE_ENV === "development" ?
    process.env.REACT_APP_PROD_DOCKER_BACKEND_API_URL || process.env.REACT_APP_DEV_BACKEND_API_URL :
    process.env.REACT_APP_PROD_BACKEND_API_URL;
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.getPublicContent = function () {
        // TODO: enable when i start
        // window.location.href = "https://www.google.com";
        return axios.get(API_URL + '/all');
    };
    UserService.prototype.getUserBoard = function () {
        return axios.get(API_URL + '/user', { headers: authHeader() });
    };
    UserService.prototype.getModeratorBoard = function () {
        return axios.get(API_URL + '/mod', { headers: authHeader() });
    };
    UserService.prototype.getAdminBoard = function () {
        return axios.get(API_URL + '/admin', { headers: authHeader() });
    };
    return UserService;
}());
export default new UserService();
