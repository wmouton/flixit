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

const MovieGrid = (props) => {
	const [items, setItems] = useState([]);

	const [page, setPage] = useState(1);
	const [totalPage, setTotalPage] = useState(0);

	const { keyword } = useParams();

	useEffect(() => {
		const getList = async () => {
			let response = null;
			if (keyword === undefined) {
				const params = {};
				switch (props.category) {
					case category.movie:
						response = await tmdbApi.getMoviesList(movieType.upcoming, {
							params,
						});
						break;
					default:
						response = await tmdbApi.getTvList(tvType.popular, { params });
				}
			} else {
				const params = {
					query: keyword,
				};
				response = await tmdbApi.search(props.category, { params });
			}
			setItems(response.results);
			setTotalPage(response.total_pages);
		};
		getList();
	}, [props.category, keyword]);
	return (
		<div>
			<h6>movie grid setup</h6>
		</div>
	);
};

export default MovieGrid;
