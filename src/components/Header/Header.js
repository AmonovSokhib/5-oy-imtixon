import './header.scss';
import Logo from '../../assets/icons/githubLogo.svg';
import Notification from '../../assets/imgs/notification.png';
import DownButton from '../../assets/imgs/downbutton.png';
import Circle from '../../assets/imgs/102282364.png';
import { Navbar } from '../Navbar';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<>
			<div className='site-header'>
				<div className='site-wrapper'>
					<div className='d-flex align-items-center'>
						<Link to={'/'}>
							<img className='header-logo' src={Logo} alt='an logo' />
						</Link>
						<input
							type='search'
							placeholder='   Search or jump to...'
							className='header-search'
						/>

						<ul className='site-nav__list'>
							<li className='nav-list__item mx-2 mt-2'>Pull requests</li>
							<li className='nav-list__item mx-2 mt-2'>Issues</li>
							<li className='nav-list__item mx-2 mt-2'>Codespaces</li>
							<li className='nav-list__item mx-2 mt-2'>Marketplace</li>
							<li className='nav-list__item mx-2 mt-2'>Explore</li>
						</ul>
					</div>
					<div className='d-flex'>
						<div className='mt-1'>
							<img src={Notification} alt='an img' />
						</div>
						<div className='mx-3 '>
							<span className='text-white  fs-4'>
								+
								<img
									width={16}
									height={16}
									className='mt-1'
									src={DownButton}
									alt='an img'
								/>
							</span>
						</div>
						<div className='me-5'>
							<span>
								<img
									className='circle-img'
									width={34}
									height={34}
									src={Circle}
									alt='an img'
								/>
								<img
									width={16}
									height={16}
									className='mt-3'
									src={DownButton}
									alt='an img'
								/>
							</span>
						</div>
					</div>
				</div>
			</div>
			<Navbar />
		</>
	);
};
