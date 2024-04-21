import { useStore } from '../store/useStore';
import { Button } from './Button';
import { Price } from './Price';

const ProductItem = ({ item }) => {
	const { addToCart, data, addQuantity } = useStore();
	return (
		<>
			<div className='border-2 w-[200px] flex flex-col'>
				<img src={item.image} alt='' />
				<div className='p-2 h-full flex flex-col'>
					{/* <p className='text-wrap text-sm'>{data.title}</p> */}
					<p className='text-sm mb-2 font-medium'>{item.description}</p>
					<p className='text-sm mb-2'>category : {item.category}</p>
					<div className='flex flex-row justify-between mb-2'>
						<p className='text-sm'>Harga</p>
						<Price>Rp{item.price}</Price>
					</div>
					<Button
						onClick={() =>
							addToCart({
								id: item.id,
								quantity: 1,
								productTitle: item.title,
								productPrice: item.price,
								image: item.image,
							})
						}
					>
						+ Cart
					</Button>
				</div>
			</div>
		</>
	);
};

export default ProductItem;
