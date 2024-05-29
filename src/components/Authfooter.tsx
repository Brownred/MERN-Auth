import { Link } from 'react-router-dom';
import { footerLinks } from '../lib/constants';

const AuthFooter = () => {
	return (
		<div className='w-screen bg-white lg:py-3 md:py-1 lg:px-16 md:px-12 flex justify-between'>
			{footerLinks.map((link) => (
				<Link to={link.path} className='text-gray-600 text-xs'>
					{link.label}
				</Link>
			))}
		</div>
	);
};

export default AuthFooter;
