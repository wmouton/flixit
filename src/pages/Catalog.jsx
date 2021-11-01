import React from 'react';
// import use params from react-router
import { useParams } from 'react-router';
// import components
import PageHeader from '../components/page-header/PageHeader';
import MovieGrid from '../components/movie-grid/MovieGrid';
// import API
import { category as cate } from '../api/tmdbApi';

// the catalog functional component
const Catalog = () => {
	const { category } = useParams();

	return (
		<>
			<PageHeader>
				{category === cate.movie ? 'Movies' : 'TV Series'}
			</PageHeader>
			<div className='container'>
				<div className='section mb-3'>
					<MovieGrid category={category} />
				</div>
			</div>
		</>
	);
};

export default Catalog;
