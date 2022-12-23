import { Footer, User } from '../../components';
import Btn from '../../assets/imgs/btn.png';
import Icon2 from '../../assets/icons/icon2.svg';
import Icon5 from '../../assets/imgs/icon8.png';

import './repositories.scss';
import { useContext } from 'react';
import { UrlContext } from '../../context/UrlContext';
export const Repositories = () => {
	const { repo } = useContext(UrlContext);

	return (
		<div className='container'>
			<div className='d-flex'>
				<div className='me-4'>
					<User />
				</div>
				<div className='repositories'>
					<div>
						<input
							className='search-input'
							placeholder='  Find a repository...'
							type='search'
						/>
						<button className='buttons'>
							Type
							<img
								className='ms-2'
								width={12}
								height={12}
								src={Btn}
								alt='an img'
							/>
						</button>
						<button className='mx-1 buttons'>
							Language{' '}
							<img
								className='ms-2'
								width={12}
								height={12}
								src={Btn}
								alt='an img'
							/>
						</button>
						<button className='buttons'>
							Sort{' '}
							<img
								className='ms-2'
								width={12}
								height={12}
								src={Btn}
								alt='an img'
							/>
						</button>
						<button className='ms-3 new-btn'>
							<img width={20} height={20} src={Icon2} alt='' /> New
						</button>
					</div>
					<ul className='repo-list'>
						{repo.map((item) => (
							<li key={item.id} className=''>
								<hr />
								<div className='d-flex justify-content-between'>
									<div>
										<div className='d-flex'>
											<a className='repo-name' href={item.html_url}>
												{item.name}
											</a>
											<p className='repo-public'>Public</p>
										</div>
										<div className='d-flex'>
											<p className='me-4'>{item.language}</p>
											<p>{item.created_at}</p>
										</div>
									</div>
									<div>
										<div className='button-end'>
											<button className='bg-white star'>
												<img
													className='me-2'
													width={24}
													height={24}
													src={Icon5}
													alt='an img'
												/>
												Star
											</button>
											<button className='bg-white btn-btn'>
												<img width={12} height={12} src={Btn} alt='' />
											</button>
										</div>
										<div className='activity'></div>
									</div>
								</div>
							</li>
						))}
						<hr />
					</ul>
				</div>
			</div>
			<Footer />
		</div>
	);
};
