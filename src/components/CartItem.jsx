import { useState } from 'react';
import { Panel } from './Panel';

const CartItem = () => {
	const [count, setCount] = useState(1);
	const productCountButton = (param) => {
		if (param === 'tambah') {
			if (count < 20) {
				setCount(count + 1);
			}
		} else {
			if (count > 0) {
				setCount(count - 1);
			}
		}

		console.log(count);
	};
	return (
		<>
			<div className='flex flex-row gap-8'>
				<input type='checkbox' className='self-start w-10 h-10' />

				<div className='flex flex-col justify-between'>
					<div className='flex flex-row h-full gap-8'>
						<img
							src='https://picsum.photos/200'
							alt=''
							className='rounded-2xl w-28'
						/>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
							atque culpa nostrum aliquam earum omnis ipsa libero, sed, officia
							incidunt odio, quo sunt ducimus eaque esse deserunt quia. Vel,
							exercitationem!
						</p>
						<p className='text-lg font-medium'>Rp3000</p>
					</div>
					<div className='flex flex-row gap-2 self-end'>
						<button>Delete</button>
						<div className='flex flex-row gap-2 border-2 rounded-lg'>
							<button
								className='px-2 text-xl'
								onClick={() => productCountButton('minus')}
							>
								-
							</button>
							<input
								type='text'
								className='text-md w-8 text-center'
								onChange={(event) => {
									setCount(Number(event.target.value));
								}}
								onBlur={() => {
									if (count > 20) {
										setCount(20);
									}
								}}
								value={count}
							/>
							<button
								className='px-2 text-xl'
								onClick={() => productCountButton('tambah')}
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
