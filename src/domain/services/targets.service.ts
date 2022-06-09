import axios from 'axios';
import authHeader from './auth-header';

const API_URL = process.env.NODE_ENV === "development" ?
	process.env.REACT_APP_PROD_DOCKER_BACKEND_API_URL || process.env.REACT_APP_DEV_BACKEND_API_URL :
	process.env.REACT_APP_PROD_BACKEND_API_URL;

class TargetService {

	getTargets() {
		return axios.get(API_URL + '/user', {headers: authHeader()});
	}

	getModeratorBoard() {
		return axios.get(API_URL + '/mod', {headers: authHeader()});
	}

	getAdminBoard() {
		return axios.get(API_URL + '/admin', {headers: authHeader()});
	}
}

export default new TargetService();
