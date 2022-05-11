import axios from "axios";

export const api = axios.create({
    baseURL: "https://tiao.supliu.com.br/api"
});

api.interceptors.request.use(
    (config: any) => {
        config.headers.Authorization = "alvaroedusilva@yahoo.com";

        return config;
    },
    
    (error) => {
        return Promise.reject(error);
    }
)