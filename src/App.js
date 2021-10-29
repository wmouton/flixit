// import libraries
import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
// import scss
import './App.scss';

// imports from react-router-dom
import { BrowserRouter, Route } from 'react-router-dom';

// import components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routes from './config/Routes';

function App() {
	return (
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
	);
}

export default App;
