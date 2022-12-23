import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { Followers, Home, Repositories } from './pages';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/repositories' element={<Repositories />} />
				<Route path='/follower' element={<Followers />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
