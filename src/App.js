import './App.scss';
import Header from './components/header/Header';
import Home from './pages/Home';
import Footer from './components/footer/Footer';

function App() {
	return (
		<div className='App'>
			<Header />
			<h4>search for your favorite movies</h4>
			<button className='btn'>search</button>

			<div>
				<Home />
			</div>

			<div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
