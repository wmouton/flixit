// configure the API
const apiConfig = {
	baseUrl: 'https://api.themoviedb.org/3/',
	apiKey: 'e8ca87ad95dbb807127fc10aff0600dd',
	originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
