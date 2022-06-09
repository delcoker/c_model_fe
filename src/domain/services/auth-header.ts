export default function authHeader() {
    const userStr = localStorage.getItem("user");
    let user = null;
    if (userStr)
        user = JSON.parse(userStr);

    console.log(userStr)

    if (user && user.token) {
        return {
            // "Access-Control-Allow-Origin": "*", // not working
            Authorization: 'Bearer ' + user.token
        }; // for Spring Boot back-end
        // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
        return {};
    }
}