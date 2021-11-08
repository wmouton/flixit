import React from 'react';
// import scss
import './page-header.scss';
// import footer background
import bg from '../../assets/img/footer-bg.jpg';

// page header functional component
const PageHeader = (props) => {
	return (
		<div className='page-header' style={{ backgroundImage: `url(${bg})` }}>
			<h2>{props.children}</h2>
		</div>
	);
};

export default PageHeader;
