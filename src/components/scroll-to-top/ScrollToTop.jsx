import React from 'react';
// import scss
import '../../App.scss';
import BackToTop from 'react-back-to-top-button';

// scroll to top functional component
const ScrollToTop = () => {
	return (
		<BackToTop showOnScroll showAt={100} speed={1500} easing='easeInOutQuint'>
			<span className='btn btn-scroll-up'>^</span>
		</BackToTop>
	);
};

export default ScrollToTop;
