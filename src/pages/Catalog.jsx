import React from 'react';
import { useParams } from 'react-router';

// the catalog functional component
const Catalog = () => {
	const { category } = useParams();

	console.log(category);
	
	return (
		<div>
			<h6>Catalog</h6>
		</div>
	);
};

export default Catalog;
