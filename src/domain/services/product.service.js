import axios from 'axios';
import authHeader from './auth-header';
var API_URL = process.env.NODE_ENV === "development" ?
    process.env.REACT_APP_PROD_DOCKER_BACKEND_API_URL || process.env.REACT_APP_DEV_BACKEND_API_URL :
    process.env.REACT_APP_PROD_BACKEND_API_URL;
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    ProductService.prototype.getProducts = function () {
        return axios.get(API_URL + '/products', { headers: authHeader() });
    };
    ProductService.prototype.getModeratorBoard = function () {
        return axios.get(API_URL + '/mod', { headers: authHeader() });
    };
    ProductService.prototype.getAdminBoard = function () {
        return axios.get(API_URL + '/admin', { headers: authHeader() });
    };
    return ProductService;
}());
export default new ProductService();
