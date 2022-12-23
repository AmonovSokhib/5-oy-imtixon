import { Footer, User } from '../../components';
import './home.scss';
import { useContext } from 'react';
import { UrlContext } from '../../context/UrlContext';

export const Home = () => {
	const { repo } = useContext(UrlContext);
	const data = repo.slice(0, 6);

	return (
		<div className='container'>
			<div className='d-flex'>
				<div className='me-4'>
					<User />
				</div>
				<div>
					<div className='d-flex justify-content-between mb-0'>
						<p className='popular'>Popular repositories</p>
						<p className='customise'>Customize your pins</p>
					</div>
					<ul className='card-list'>
						{data.map((item) => (
							<li key={item.id} className='card-item'>
								<div className='d-flex justify-content-between'>
									<a className='item-name' href={item.html_url}>
										{item.name}
									</a>
									<p className='card-item__subtitle'>Public</p>
								</div>
								<p className='language-item'>{item.language}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
			<Footer />
		</div>
	);
};
