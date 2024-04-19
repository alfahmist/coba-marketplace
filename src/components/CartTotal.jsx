import { Button } from './Button';
import { Panel } from './Panel';
import { Price } from './Price';

const CartTotal = () => {
	return (
		<>
			<Panel>
				<h5 className='mb-2 font-medium'>Ringkasan Belanja</h5>
				<div className='flex flex-row justify-between'>
					<p>Total</p>
					<Price>Rp5000</Price>
				</div>
				<hr className='my-4' />
				<Button>Beli(2)</Button>
			</Panel>
		</>
	);
};

export default CartTotal;
