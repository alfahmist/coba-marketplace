import { Button } from './Button';
import { Price } from './Price';

const ProductItem = ({ data }) => {
	return (
		<>
			<div className='border-2 w-[200px] flex flex-col'>
				<img src={data.image} alt='' />
				<div className='p-2 h-full flex flex-col'>
					{/* <p className='text-wrap text-sm'>{data.title}</p> */}
					<p className='text-sm mb-2 font-medium'>{data.description}</p>
					<p className='text-sm mb-2'>category : {data.category}</p>
					<div className='flex flex-row justify-between mb-2'>
						<p className='text-sm'>Harga</p>
						<Price>Rp{data.price}</Price>
					</div>
					<Button>+ Cart</Button>
					{/* <button className='bg-green-600 text-white rounded-lg w-full py-2 text-sm mb-auto self-end m-auto'>
						+ Cart
					</button> */}
				</div>
			</div>
		</>
	);
};

export default ProductItem;
