import axios from "axios";
import LocalStorageService from "../services/localStorage"

axios.defaults.baseURL = "http://localhost:5555";

axios.interceptors.request.use(
    (config) => {
        if (config.url.includes("/login") || config.url.includes("/register")) {
            return config;
        }
        const token = LocalStorageService.getToken();
        config.headers["Authorization"] = `Bearer ${token}`;
        return config;
    },
    (err) => {
        throw err;
    }
);

export default axios;