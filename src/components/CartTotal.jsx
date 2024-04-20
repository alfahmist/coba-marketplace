import { useEffect } from 'react';
import { useStore } from '../store/useStore';
import { Button } from './Button';
import { Price } from './Price';

const CartTotal = () => {
	const {
		updateQuantity,
		data,
		setTotalPrice,
		getTotalItem,
		itemSelected,
		getTotalPrice,
		setProductQuantity,
	} = useStore();
	return (
		<>
			<div className='flex flex-col h-full'>
				<h5 className='mb-2 font-medium'>Ringkasan Belanja</h5>
				<div className='flex flex-row justify-between'>
					<p>Total</p>
					<Price>Rp{Number(getTotalPrice())}</Price>
				</div>
				<hr className='my-4' />
				<Button
					onClick={() => {
						// let a = getTotalItem();
						// console.log(a);
					}}
				>
					Beli(
					{getTotalItem()})
				</Button>
				<Button
					onClick={() => {
						// setProductQuantity(1, 10);
						// console.log('awd');
						console.log(data);
					}}
				>
					TEST
				</Button>
			</div>
		</>
	);
};

export default CartTotal;
