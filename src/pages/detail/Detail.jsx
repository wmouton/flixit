import React, { useEffect, useState } from 'react';
// imports from react-router
import { useParams } from 'react-router';
// import api configurations
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
// import css
import './detail.scss';
// import components
import CastList from './CastList';
import VideoList from './VideoList';
import MovieList from '../../components/movie-list/MovieList';


// the detail functional component
const Detail = () => {
	return (
		<div>
			<h6>Detail</h6>
		</div>
	);
};

export default Detail;
