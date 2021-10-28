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
		<div className='header' ref={headerRef}>
			<div className='header_wrap container'>
				<div className='logo'>
					<img src={logo} alt='logo' />
					<Link to='/'>flixit</Link>
				</div>
				<ul></ul>
			</div>
		</div>
	);
};

export default Header;
