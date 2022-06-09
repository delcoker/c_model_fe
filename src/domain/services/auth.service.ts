import axios from "axios";

console.log(process.env)

const API_URL = process.env.NODE_ENV === "development" ?
    process.env.REACT_APP_PROD_DOCKER_BACKEND_API_URL ||
    process.env.REACT_APP_DEV_BACKEND_API_URL :
    process.env.REACT_APP_PROD_BACKEND_API_URL;

class AuthService {
    login(email: string, password: string, rememberMe: boolean) {
        console.log(email, password, rememberMe)
        return axios
            .post(API_URL + "/auth/login", {
                email,
                password,
                rememberMe,
            })
            .then(response => {
                console.log(response);
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username: string, email: string, password: string, verifyPassword: string) {
        return axios.post(API_URL + "/registration/register", {
            username,
            email,
            password,
            verifyPassword
        });
    }

    getCurrentUser() {
        // TODO: enable when i start
        // const userStr = localStorage.getItem("user");
        // if (userStr) return JSON.parse(userStr);

        return null;
    }
}

export default new AuthService();
