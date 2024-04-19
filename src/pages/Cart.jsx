import CartItem from '../components/CartItem';
import CartTotal from '../components/CartTotal';
import { Panel } from '../components/Panel';

const Cart = () => {
	return (
		<>
			<div className='flex flex-row w-10/12 mx-auto gap-5 justify-center'>
				<div className='flex flex-col min-w-[600px] max-w-[800px]'>
					<Panel className='mx-auto flex gap-2 mb-2 rounded-t-lg w-full'>
						<input type='checkbox' className='self-start w-4 h-4 mr' />
						<span className='leading-4'>Pilih Semua(3)</span>
						<button className='ml-auto'>Hapus</button>
					</Panel>
					<Panel className='w-full'>
						<CartItem />
					</Panel>
				</div>
				<Panel className='flex-1 min-w-[200px] max-w-[400px]'>
					<CartTotal />
				</Panel>
			</div>
		</>
	);
};

export default Cart;
