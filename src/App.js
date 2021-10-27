import './App.scss';
import Header from './components/header/Header';

function App() {
	return (
		<div className='App'>
			<Header />
			<h4>search for your favorite movies</h4>
			<button className='btn'>search</button>
		</div>
	);
}

export default App;
