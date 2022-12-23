import { Footer, User } from '../../components';
import './followers.scss';
import { useContext } from 'react';
import { UrlContext } from '../../context/UrlContext';

export const Followers = () => {
	const { follow } = useContext(UrlContext);

	return (
		<div className='container'>
			<div className='d-flex'>
				<div className='me-3'>
					<User />
				</div>
				<div className='follow-page'>
					<ul className='follow-list'>
						{follow.map((e) => (
							<li key={e.id}>
								<div className='d-flex w-100 justify-content-between align-items-center'>
									<div className='d-flex mb-4'>
										<img
											className='avatar-img'
											width={70}
											height={70}
											src={e.avatar_url}
											alt='an img'
										/>
										<a href={e.html_url} className='mt-2 ms-4 user-name'>
											{e.login}
										</a>
									</div>
									<button className='follow-btn'>Follow</button>
								</div>
								<hr />
							</li>
						))}
					</ul>
				</div>
			</div>
			<Footer />
		</div>
	);
};
