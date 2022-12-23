import { Link } from 'react-router-dom';
import FooterLogo from '../../assets/imgs/footer.png';
import './footer.scss';

export const Footer = () => {
	return (
		<div className='container'>
			<div className='footer'>
				<hr />
				<div className='site-footer d-flex mt-3'>
					<div className='d-flex'>
						<Link to={'/'}>
							<img src={FooterLogo} alt='' />
						</Link>
						<p className='ms-3 mt-1'>2022 Github, Inc</p>
					</div>
					<ul className='d-flex footer-list mt-1'>
						<li className='mx-3'>
							<Link>Terms</Link>
						</li>
						<li className='mx-3'>
							<Link>Privacy</Link>
						</li>
						<li className='mx-3'>
							<Link>Security</Link>
						</li>
						<li className='mx-3'>
							<Link>Status</Link>
						</li>
						<li className='mx-3'>
							<Link>Docs</Link>
						</li>
						<li className='mx-3'>
							<Link>Contact GitHub</Link>
						</li>
						<li className='mx-3'>
							<Link>Pricing</Link>
						</li>
						<li className='mx-3'>
							<Link>API</Link>
						</li>
						<li className='mx-3'>
							<Link>Training</Link>
						</li>
						<li className='mx-3'>
							<Link>Blog</Link>
						</li>
						<li className='mx-3'>
							<Link>About</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
