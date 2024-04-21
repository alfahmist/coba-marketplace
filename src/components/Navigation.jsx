import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<>
			<div className='flex flex-row gap-4 justify-center'>
				<Link to={`/`}>Product</Link>
				<Link to={`/cart`}>Cart</Link>
			</div>
		</>
	);
};

export default Navigation;
