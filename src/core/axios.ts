import axios from 'axios';

const axiosConfig = {
	baseURL: 'https://expa.fly.dev',
};

const instance = axios.create(axiosConfig);

instance.interceptors.response.use(
	response => response,
	error => instance(error.config)
);

export default instance;
