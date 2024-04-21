import { useEffect, useState } from 'react';
import { data } from '../data/data';
import ProductItem from '../components/ProductItem';
import Navigation from '../components/Navigation';

const Product = () => {
	const [state, setState] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// setLoading(true);
		// setTimeout(() => {
		setLoading(false);
		// }, 2000);
		setState(data); // count is 0 here
	}, [state]);
	return (
		<>
			<Navigation />
			{loading ? (
				<h1 className='text-center'>Loading...</h1>
			) : (
				<>
					<div className='flex flex-row flex-wrap gap-2 justify-center'>
						{state.map((obj) => {
							obj.title = obj.title[0].toUpperCase() + obj.title.slice(1);
							if (obj.description.length > 76) {
								obj.description = obj.description.slice(0, 46) + '...';
							}
							return <ProductItem key={obj.id} item={obj} />;
						})}
					</div>
				</>
			)}
		</>
	);
};
export default Product;
