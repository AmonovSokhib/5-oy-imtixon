import './navbar.scss';
import Icon1 from '../../assets/icons/icon1.svg';
import Icon2 from '../../assets/icons/icon2.svg';
import { Link, NavLink } from 'react-router-dom';
import Icon3 from '../../assets/imgs/icon5.png';
import Icon4 from '../../assets/imgs/icon7.png';
import Icon5 from '../../assets/imgs/icon8.png';
import { useContext } from 'react';
import { UrlContext } from '../../context/UrlContext';

export const Navbar = () => {
	const { state } = useContext(UrlContext);
	return (
		<div className='navbar'>
			<div className='site-nav'>
				<ul className='navbar-list'>
					<li className='navbar-list__item'>
						<NavLink
							to={'/'}
							className={({ isActive }) =>
								isActive ? 'active-link' : undefined
							}>
							<img className='me-1' src={Icon1} alt='icon1' />
							Overview
						</NavLink>
					</li>
					<li className='navbar-list__item'>
						<NavLink
							to={'/repositories'}
							className={({ isActive }) =>
								isActive ? 'active-link' : undefined
							}>
							<img className='me-1' src={Icon2} alt='icon2' />
							Repositories{' '}
							<span className='repo-num'>{state.public_repos}</span>
						</NavLink>
					</li>
					<li className='navbar-list__item'>
						<img className='me-1' src={Icon3} alt='icon2' />
						<Link>Project</Link>
					</li>
					<li className='navbar-list__item'>
						<img className='me-1' src={Icon4} alt='icon2' />
						<Link>Packages</Link>
					</li>
					<li className='navbar-list__item'>
						<img className='me-1' src={Icon5} alt='icon2' />
						<Link>Stars</Link>
					</li>
				</ul>
				<hr />
			</div>
		</div>
	);
};
