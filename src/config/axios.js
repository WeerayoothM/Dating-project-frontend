import axios from "axios";
import { notification } from "antd";
import LocalStorageService from "../services/localStorage"
import { BASE_BACKEND_URL } from "./constants";

axios.defaults.baseURL = BASE_BACKEND_URL;

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

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        if (err.response?.status === 401) {
            LocalStorageService.clearToken();
            notification.error({
                message: "กรุณาเข้าสู่ระบบใหม่",
                placement: "topRight"
            });
            window.location.href = 'http://localhost:3000'

            return Promise.reject(err);
        }

        return Promise.reject(err);
    }
);

export default axios;