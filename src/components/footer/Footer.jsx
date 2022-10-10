import React from 'react';
// import scss
import './footer.scss';
import { Link } from 'react-router-dom';
// import components
import bg from '../../assets/img/footer-bg.jpg';
import logo from '../../assets/img/flixit.svg';

// footer functional component
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
				<center>
					<h4>Developed by <a style={{color: '#3FC2FC'}} href="https://wmouton.vercel.app">WMouton</a><br /><div style={{fontSize: '12px'}}>In collaboration with <a style={{color: '#3FC2FC'}} href="https://github.com/5n0weirdo">Snoweirdo</a></div></h4>
				</center>
				<br />
					<center>
						<h4>Copyright © 2022, <a href="https://flixit.netlify.app">Flixit</a></h4>
					</center>
				{/* <div className='footer__content__menus'>
					<div className='footer__content__menu'>
						<Link to='/'>Home</Link>
						<Link to='/'>Contact us</Link>
						<Link to='/'>About us</Link>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Footer;
