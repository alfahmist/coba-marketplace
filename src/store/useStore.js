import { create } from 'zustand';

export const useStore = create((set, get) => ({
	data: {
		cart: {
			totalItem: 1,
			totalPrice: 9000,
		},
		products: {
			product: [
				{
					id: 1,
					quantity: 1,
					productTitle: 'adawd',
					productPrice: 3000,
				},
			],
		},
	},
	getTotalItem: () => {
		const item = get().data.cart.totalItem;
		return item;
	},
	setTotalPrice: (totalItem, totalPrice) =>
		set((state) => ({
			data: {
				cart: { totalPrice: totalPrice, totalItem: totalItem },
				...state.data.prodcuts,
			},
		})),

	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	updateQuantity: (quantity) => set({ quantity: quantity }),
	removeAllBears: () => set({ bears: 0 }),
	updateBears: (newBears) => set({ bears: newBears }),
}));
