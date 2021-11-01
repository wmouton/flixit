import React from 'react';
// import css
import './footer.scss';
// import link from react-router-dom
import { Link } from 'react-router-dom';
// import images
import bg from '../../assets/img/footer-bg.jpg';
import logo from '../../assets/img/flixit.png';

// the footer functional component
const Footer = () => {
	return (
		<div className='footer' style={{ backgroundImage: `url(${bg})` }}>
			<div className='footer__content container'>
				<div className='footer__content__logo'>
					<div className='logo'>
						<Link to='/'>
							<img src={logo} alt='' />
							<h4>Movies & Series</h4>
						</Link>
					</div>
				</div>
				<div className='footer__content__menus'>
					<div className='footer__content__menu'>
						<Link to='/'>Home</Link>
						<Link to='/'>Contact us</Link>
						<Link to='/'>Term of services</Link>
						<Link to='/'>About us</Link>
					</div>
					{/* <div className='footer__content__menu'>
						<Link to='/'>Live</Link>
						<Link to='/'>FAQ</Link>
						<Link to='/'>Premium</Link>
						<Link to='/'>Pravacy policy</Link>
					</div>
					<div className='footer__content__menu'>
						<Link to='/'>You must watch</Link>
						<Link to='/'>Recent release</Link>
						<Link to='/'>Top IMDB</Link>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Footer;
