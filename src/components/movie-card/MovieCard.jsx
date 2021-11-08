import React from 'react';
// import scss
import './movie-card.scss';
import { Link } from 'react-router-dom';
// import components
import Button from '../button/Button';
// import from the movie database API file
import { category } from '../../api/tmdbApi';
// import API configuration
import apiConfig from '../../api/apiConfig';

// movie card functional component
const MovieCard = (props) => {
	const item = props.item;

	const link = '/' + category[props.category] + '/' + item.id;

	const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

	return (
		<Link to={link}>
			<div className='movie-card' style={{ backgroundImage: `url(${bg})` }}>
				<Button>
					<i className='bx bx-play'></i>
				</Button>
			</div>
			<h3>{item.title || item.name}</h3>
		</Link>
	);
};

export default MovieCard;
