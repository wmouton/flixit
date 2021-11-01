import React, { useState, useEffect, useRef } from 'react';
// import from react-router
import { useParams } from 'react-router';
// import from API
import tmdbApi from '../../api/tmdbApi';

// video list functional component
const VideoList = (props) => {
	const { category } = useParams();

	const [videos, setVideos] = useState([]);

	useEffect(() => {
		const getVideos = async () => {
			const res = await tmdbApi.getVideos(category, props.id);
			setVideos(res.results.slice(0, 5));
		};
		getVideos();
	}, [category, props.id]);

	return (
		<>
			{videos.map((item, i) => (
				<Video key={i} item={item} />
			))}
		</>
	);
};

export default VideoList;
