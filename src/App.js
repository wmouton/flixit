// import css
import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
// import scss
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
// import components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// import ScrollToTop from './components/scroll-to-top/ScrollToTop';
// import routes
import Routes from './config/Routes';

function App() {
	return (
		<>
			{/* <div className='scrl'>
				<ScrollToTop />
			</div> */}
			<BrowserRouter>
				<Route
					render={(props) => (
						<>
							<Header {...props} />
							<Routes />
							<Footer />
						</>
					)}
				/>
			</BrowserRouter>
		</>
	);
}

export default App;
