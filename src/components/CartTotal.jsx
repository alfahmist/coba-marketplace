import { useEffect } from 'react';
import { useStore } from '../store/useStore';
import { Button } from './Button';
import { Price } from './Price';

const CartTotal = () => {
	const { updateQuantity, data, setTotalPrice, getTotalItem } = useStore();
	useEffect(() => {}, data);
	return (
		<>
			<div className='flex flex-col h-full'>
				<h5 className='mb-2 font-medium'>Ringkasan Belanja</h5>
				<div className='flex flex-row justify-between'>
					<p>Total</p>
					<Price>Rp{data.cart.totalPrice}</Price>
				</div>
				<hr className='my-4' />
				<Button
					onClick={() => {
						let a = getTotalItem();
						console.log(a);
					}}
				>
					Beli(
					{getTotalItem()})
				</Button>
				<Button
					onClick={() => {
						setTotalPrice(10);
					}}
				>
					TEST
				</Button>
			</div>
		</>
	);
};

export default CartTotal;
