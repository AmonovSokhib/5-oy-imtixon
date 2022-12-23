import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
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
		</div>
	);
}

export default App;
