import axios from 'axios';
import authHeader from './auth-header';
var API_URL = process.env.NODE_ENV === "development" ?
    process.env.REACT_APP_PROD_DOCKER_BACKEND_API_URL || process.env.REACT_APP_DEV_BACKEND_API_URL :
    process.env.REACT_APP_PROD_BACKEND_API_URL;
var TargetService = /** @class */ (function () {
    function TargetService() {
    }
    TargetService.prototype.getTargets = function () {
        return axios.get(API_URL + '/user', { headers: authHeader() });
    };
    TargetService.prototype.getModeratorBoard = function () {
        return axios.get(API_URL + '/mod', { headers: authHeader() });
    };
    TargetService.prototype.getAdminBoard = function () {
        return axios.get(API_URL + '/admin', { headers: authHeader() });
    };
    return TargetService;
}());
export default new TargetService();
