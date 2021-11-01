import React, { useState, useEffect, useCallback } from 'react';
// imports from react-router
import { useHistory, useParams } from 'react-router';
// import css
import './movie-grid.scss';
// import components
import MovieCard from '../movie-card/MovieCard';
import Button, { OutlineButton } from '../button/Button';
import Input from '../input/Input';
// imports from the movie database API
import tmdbApi, { category, movieType, tvType } from '../../api/tmdbApi';

const MovieGrid = () => {
	return (
		<div>
			<h6>movie grid setup</h6>
		</div>
	);
};

export default MovieGrid;
