import axios from 'axios';
import authHeader from './auth-header';
var API_URL = process.env.NODE_ENV === "development" ?
    process.env.REACT_APP_PROD_DOCKER_BACKEND_API_URL || process.env.REACT_APP_DEV_BACKEND_API_URL :
    process.env.REACT_APP_PROD_BACKEND_API_URL;
var TimeService = /** @class */ (function () {
    function TimeService() {
    }
    TimeService.prototype.getPublicContent = function () {
        // TODO: enable when i start
        // window.location.href = "https://www.google.com";
        return axios.get(API_URL + '/all');
    };
    TimeService.prototype.getTime = function () {
        return axios.get(API_URL + '/time', { headers: authHeader() });
    };
    TimeService.prototype.getModeratorBoard = function () {
        return axios.get(API_URL + '/mod', { headers: authHeader() });
    };
    TimeService.prototype.getAdminBoard = function () {
        return axios.get(API_URL + '/admin', { headers: authHeader() });
    };
    return TimeService;
}());
export default new TimeService();
