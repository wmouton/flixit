import axios from 'axios';
import queryString from 'query-string';
// import api config file
import apiConfig from './apiConfig';

// axios client
const axiosClient = axios.create({
	baseURL: apiConfig.baseUrl,
	headers: {
		'Content-Type': 'application/json',
	},
	paramsSerializer: (params) =>
		queryString.stringify({ ...params, api_key: apiConfig.apiKey }),
});
