import axios from 'axios';

import URL from './config.api';

const request = axios.create({
	baseURL: URL,
});

const subscribe = (history = null) => {
	request.interceptors.request.use((config) => {
		let token = localStorage.getItem('token');

		if (token) {
			config.headers['Content-Type'] = ['application/json'];
			config.headers['Access-Control-Allow-Origin'] = ['*'];
			config.headers['Access-Control-Allow-Methods'] = ['*'];
		}

		return config;
	});

	request.interceptors.response.use(
		(config) => config,
		(error) => {
			if (error?.response?.status === 401) {
				localStorage.removeItem('token');
				// history.push("/");
				console.log('error!');
			}

			if (error.response?.data) {
				console.log(error);
			}

			throw error;
		}
	);
};

export default { request, subscribe };
