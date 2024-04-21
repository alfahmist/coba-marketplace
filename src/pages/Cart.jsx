import CartItem from '../components/CartItem';
import CartTotal from '../components/CartTotal';
import Navigation from '../components/Navigation';
import { Panel } from '../components/Panel';
import { useStore } from '../store/useStore';

const Cart = () => {
	const { data, getTotalItem, deleteAll } = useStore();
	return (
		<>
			<Navigation />
			<div className='flex flex-row w-10/12 mx-auto gap-5 justify-center'>
				<div className='flex flex-col min-w-[600px] max-w-[800px]'>
					<Panel className='mx-auto flex gap-2 mb-2 rounded-t-lg w-full '>
						<input type='checkbox' className='self-start w-4 h-4 mr' />
						{/* Fitur Belum Bisa */}
						<span className='leading-4'>Pilih Semua</span>
						<button className='ml-auto' onClick={() => deleteAll()}>
							Hapus
						</button>
					</Panel>

					{data.cart.products.map((data, index) => {
						return (
							<Panel key={index} className='w-full mb-2'>
								<CartItem data={data} />
							</Panel>
						);
					})}
				</div>
				<Panel className='flex-1 min-w-[200px] max-w-[400px] max-h-[230px]'>
					<CartTotal />
				</Panel>
			</div>
		</>
	);
};

export default Cart;
