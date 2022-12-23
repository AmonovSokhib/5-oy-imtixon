import './navbar.scss';
import Icon1 from '../../assets/icons/icon1.svg';
import Icon2 from '../../assets/icons/icon2.svg';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UrlContext } from '../../context/UrlContext';

export const Navbar = () => {
	const { state } = useContext(UrlContext);
	return (
		<div>
			<div className='site-nav'>
				<ul className='navbar-list'>
					<li className='navbar-list__item'>
						<NavLink
							to={'/'}
							className={({ isActive }) =>
								isActive ? 'active-link' : undefined
							}>
							<img className='me-2 ' src={Icon1} alt='icon1' />
							Overview
						</NavLink>
					</li>
					<li className='navbar-list__item'>
						<NavLink
							to={'/repositories'}
							className={({ isActive }) =>
								isActive ? 'active-link' : undefined
							}>
							<img className='me-2 ' src={Icon2} alt='icon2' />
							Repositories{' '}
							<span className='repo-num'>{state.public_repos}</span>
						</NavLink>
					</li>
					<li className='navbar-list__item'>
						<NavLink>Project</NavLink>
					</li>
					<li className='navbar-list__item'>
						<NavLink>Packages</NavLink>
					</li>
					<li className='navbar-list__item'>
						<NavLink>Stars</NavLink>
					</li>
				</ul>
				<div className='line'></div>
			</div>
		</div>
	);
};
