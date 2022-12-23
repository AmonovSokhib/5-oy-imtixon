import { User } from '../../components';
import './repositories.scss';
import { useContext } from 'react';
import { UrlContext } from '../../context/UrlContext';
export const Repositories = () => {
	const { repo } = useContext(UrlContext);

	return (
		<div className='container'>
			<div className='d-flex'>
				<div className='me-2'>
					<User />
				</div>
				<div className='repositories'>
					<ul className='repo-list'>
						{repo.map((item) => (
							<li key={item.id} className=''>
								<hr />
								<div className='d-flex'>
									<h5 className='text-info me-3'>{item.name}</h5>
									<p className='public'>{item.visibility}</p>
								</div>
								<div className='d-flex'>
									<p className='me-4'>{item.language}</p>
									<p>{item.updated_at}</p>
								</div>
							</li>
						))}
						<hr />
					</ul>
				</div>
			</div>
		</div>
	);
};
