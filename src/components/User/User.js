import './user.scss';
import Follower from '../../assets/imgs/follower.png';
import { UrlContext } from '../../context/UrlContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
export const User = () => {
	const { state } = useContext(UrlContext);

	return (
		<div className='user-card'>
			<img
				className='avatar-user'
				width={350}
				height={350}
				src={state.avatar_url}
				alt='an img'
			/>
			<h2 className='name mb-2'>{state.name}</h2>
			<p className='user-name'>{state.login}</p>
			<button className='edit-profil'>Edit profile</button>
			<div className='user-follower'>
				<Link to={'/follower'} className='d-flex follow'>
					<img
						className='mt-1'
						width={16}
						height={16}
						src={Follower}
						alt='an img'
					/>
					<span className='mx-1'>{state.followers}</span>
					<p>follower</p>
				</Link>

				<Link className='d-flex follow'>
					<span className='mx-1'>{state.following}</span>
					<p>following</p>
				</Link>
			</div>
			<hr />
		</div>
	);
};
