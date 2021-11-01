import React, { useEffect, useState } from 'react';
// imports from react-router
import { useParams } from 'react-router';
// import api configurations
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
// import css
// import './detail.scss';
// import components
// import CastList from './CastList';
// import VideoList from './VideoList';
// import MovieList from '../../components/movie-list/MovieList';

// the detail functional component
const Detail = () => {
	const { category, id } = useParams();

	const [item, setItem] = useState(null);

	useEffect(() => {
		const getDetail = async () => {
			const response = await tmdbApi.detail(category, id, { params: {} });
			setItem(response);
			window.scrollTo(0, 0);
		};
		getDetail();
	}, [category, id]);

	return (
		<>
			{item && (
				<div
					className='banner'
					style={{
						backgroundImage: `url(${apiConfig.originalImage(
							item.backdrop_path || item.poster_path
						)})`,
					}}
				></div>
			)}
		</>
	);
};

export default Detail;
