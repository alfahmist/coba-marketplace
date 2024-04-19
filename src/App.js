import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { data } from './data/data';
import ProductItem from './components/ProductItem';
import CartItem from './components/CartItem';
import CartTotal from './components/CartTotal';

function App() {
	const [state, setState] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setState(data); // count is 0 here
			setLoading(false);
		}, 10);
	}, [state]);
	return (
		<div>
			{loading ? (
				<h1 className='text-center'>Loading...</h1>
			) : (
				<>
					<div className='flex flex-row flex-wrap gap-2'>
						{state.map((obj) => {
							obj.title = obj.title[0].toUpperCase() + obj.title.slice(1);
							if (obj.description.length > 76) {
								obj.description = obj.description.slice(0, 46) + '...';
							}
							return <ProductItem key={obj.id} data={obj} />;
						})}
					</div>
				</>
			)}
			<CartItem />
			<CartTotal />
		</div>
	);
}

export default App;
