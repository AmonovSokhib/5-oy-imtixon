import { User } from '../../components';
import './home.scss';
import { useContext } from 'react';
import { UrlContext } from '../../context/UrlContext';

export const Home = () => {
	const { repo } = useContext(UrlContext);
	const data = repo.slice(0, 6);

	return (
		<div className='container'>
			<div className='d-flex '>
				<div className='me-4 '>
					<User />
				</div>
				<div className='repositories'>
					<div className='d-flex justify-content-between'>
						<h5>Popular repositories</h5>
						<p>Customize your pins</p>
					</div>
					<ul className='card-list'>
						{data.map((item) => (
							<li key={item.id} className='card-item'>
								<div className='d-flex justify-content-between'>
									<p className='pt-2 px-2 text-info'>{item.name}</p>
									<p className='px-2 py-1 mt-2 me-2'>{item.visibility}</p>
								</div>
								<p className='mx-3 mt-4'>{item.language}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
