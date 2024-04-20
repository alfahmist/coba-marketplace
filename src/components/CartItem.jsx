import { useEffect, useState } from 'react';
import { Panel } from './Panel';
import { useStore } from '../store/useStore';

const CartItem = ({ data }) => {
	const {
		setTotalPrice,
		addQuantity,
		reduceQuantity,
		changeQuantity,
		deleteById,
	} = useStore();
	const [count, setCount] = useState(data.quantity);

	const productCountButton = (param) => {
		// Nanti pahami lagi line ini
		if (param === 'tambah') {
			if (count < 20) {
				// setCount(count + 1);
				// addQuantity(1);
				// console.log(count + 1);
				// ERROR BOUNDARY
				// setTotalPrice(count + 1, (count + 1) * 3000);
			}
		} else {
			if (count > 0) {
				// setCount(count - 1);
				// setTotalPrice(count - 1, (count - 1) * 3000);
			}
		}

		// console.log(count);
	};
	return (
		<>
			<div className='flex flex-row gap-8'>
				<input type='checkbox' className='self-start w-10 h-10' />

				<div className='flex flex-col justify-between'>
					<div className='flex flex-row h-full gap-8'>
						<img src={data.image} alt='' className='rounded-2xl w-28' />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
							atque culpa nostrum aliquam earum omnis ipsa libero, sed, officia
							incidunt odio, quo sunt ducimus eaque esse deserunt quia. Vel,
							exercitationem!
						</p>
						<p className='text-lg font-medium'>Rp{data.productPrice}</p>
					</div>
					<div className='flex flex-row gap-2 self-end'>
						<button
							onClick={() => {
								deleteById(data.id);
							}}
						>
							Delete
						</button>
						<div className='flex flex-row gap-2 border-2 rounded-lg'>
							<button
								className='px-2 text-xl'
								onClick={() => {
									if (count > 0) {
										setCount(Number(count) - 1);
										reduceQuantity(data.id);
									}
								}}
							>
								-
							</button>
							<input
								type='text'
								className='text-md w-8 text-center'
								onChange={(event) => {
									setCount(event.target.value);
								}}
								onBlur={(event) => {
									if (Number(event.target.value) > 20) {
										setCount(20);
										changeQuantity(data.id, 20);
									}
									if (Number(event.target.value) < 0) {
										setCount(0);
										changeQuantity(data.id, 0);
									}
									if (typeof event.target.value !== 'string') {
										setCount(data.quantity);
										console.log(Number(event.target.value));
									}
									if (
										Number(event.target.value) < 20 &&
										Number(event.target.value) > 0
									) {
										setCount(event.target.value);
										changeQuantity(data.id, Number(event.target.value));
									}
									if (isNaN(Number(event.target.value))) {
										setCount(data.quantity);
									}
									if (Number(event.target.value) === 0) {
										setCount(0);
										changeQuantity(data.id, 0);
									}
									console.log(typeof Number(event.target.value));
									console.log(Number(event.target.value));
								}}
								value={count}
							/>
							<button
								className='px-2 text-xl'
								onClick={() => {
									if (count < 20) {
										setCount(Number(count) + 1);
										addQuantity(data.id);
									}
								}}
							>
								+
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartItem;
