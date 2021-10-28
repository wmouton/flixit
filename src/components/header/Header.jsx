import React, { useRef } from 'react';
// import link from react-router-dom
import { Link, useLocation } from 'react-router-dom';
// import scss
import './header.scss';
import logo from '../../assets/img/flixit.png';

// header nav object
const headerNav = [
	{
		display: 'Home',
		path: '/',
	},
	{
		display: 'Movies',
		path: '/movies',
	},
	{
		display: 'TV Series',
		path: '/tv',
	},
];

// the header functional component
const Header = () => {
	const { pathname } = useLocation();
	const headerRef = useRef(null);

	const active = headerNav.findIndex((e) => e.path === pathname);

	return (
		<div ref={headerRef} className='header'>
			<h1>Flixit Movies</h1>
		</div>
	);
};

export default Header;
