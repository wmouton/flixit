import React, { useState, useEffect } from 'react';
// imports from react-router
import { useParams } from 'react-router';
// imports from APIs
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

// cast list functional component
const CastList = (props) => {
	const { category } = useParams();

	const [casts, setCasts] = useState([]);

	useEffect(() => {
		const getCredits = async () => {
			const res = await tmdbApi.credits(category, props.id);
			setCasts(res.cast.slice(0, 5));
		};
		getCredits();
	}, [category, props.id]);

	return (
		<div>
			<h6>cast list setup</h6>
		</div>
	);
};

export default CastList;
