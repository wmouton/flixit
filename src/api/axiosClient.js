// import the axios library
import axios from 'axios';
// query-string library
import queryString from 'query-string';
// import api config file
import apiConfig from './apiConfig';

// axios client
const axiosClient = axios.create({
	baseURL: apiConfig.baseUrl,
	headers: {
		'Content-Type': 'application/json',
	},
	// serializer for the query
	paramsSerializer: (params) =>
		queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
});

// handle interceptors request
axiosClient.interceptors.request.use(async (config) => config);

// handle interceptors response
axiosClient.interceptors.response.use(
	(response) => {
		if (response && response.data) {
			return response.data;
		}
		return response;
	},
	(error) => {
		throw error;
	}
);

export default axiosClient;
