import React, { useRef, useEffect } from 'react';
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

	// check if path === pathname
	const active = headerNav.findIndex((e) => e.path === pathname);

	useEffect(() => {
		const shrinkHeader = () => {
			if (
				document.body.scrollTop > 100 ||
				document.documentElement.scrollTop > 100
			) {
				headerRef.current.classList.add('shrink');
			} else {
				headerRef.current.classList.remove('shrink');
			}
		};
		window.addEventListener('scroll', shrinkHeader);
		return () => {
			window.removeEventListener('scroll', shrinkHeader);
		};
	}, []);

	return (
		<div className='header' ref={headerRef}>
			<div className='header__wrap container'>
				<div className='logo'>
					<img src={logo} alt='logo' />
					<Link to='/' />
				</div>
				<ul className='header__nav'>
					{headerNav.map((e, i) => (
						<li className={`${i === active ? 'active' : ''}`} key={i}>
							<Link to={e.path}>{e.display}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Header;
