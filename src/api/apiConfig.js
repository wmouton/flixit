// configure the API
require('dotenv').config();

const apiConfig = {
	baseUrl: 'https://api.themoviedb.org/3/',
	apiKey: '5dea57d4bdd9011480ae3e314a66f043',
	originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
