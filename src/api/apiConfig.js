// configure the API
// require('dotenv').config();

const apiConfig = {
	baseUrl: 'https://api.themoviedb.org/3/',
	// apiKey: process.env.REACT_APP_API_KEY,
	apiKey: "f092457843bfd363b651eb7e476e7a4d",
	originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
