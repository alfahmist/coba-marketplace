import { create } from 'zustand';
import { produce } from 'immer';

export const useStore = create((set, get) => ({
	data: {
		cart: {
			totalItem: 5,
			totalPrice: 9000,
			products: [
				{
					id: 1,
					quantity: 1,
					productTitle: 'Ayam Goyeng',
					productPrice: 10000,
				},
				{
					id: 2,
					quantity: 5,
					productTitle: 'Nasi Padang',
					productPrice: 20000,
				},
			],
		},
	},
	// getTotalItem: () => {},
	getTotalItem: () =>
		get().data.cart.products.reduce((acc, item) => {
			return (acc += item.quantity);
		}, 0),
	// getTotalPrice: () => {},
	getTotalPrice: () =>
		get().data.cart.products.reduce((acc, item) => {
			return (acc += item.quantity * item.productPrice);
		}, 0),
	setProductQuantity: (id, quantity) =>
		set((state) => ({
			data: {
				...state.data,
				cart: {
					...state.data.cart,
					products: state.data.cart.products.map((obj) => {
						if (obj.id === id) obj.quantity = quantity;
						return obj;
					}),
					// totalItem: 20,
					// totalPrice: 9000,
					// products: [
					// 	{
					// 		id: 1,
					// 		quantity: 1,
					// 		productTitle: 'Ayam Goyeng',
					// 		productPrice: 10000,
					// 	},
					// ],
				},
			},
			// state.data.cart.products.map((data) => {
			// 	if (data.id === id) {
			// 		data.quantity = quantity;
			// 	}
			// 	return data;
			// });
		})),

	setTotalItem: () => set((state) => ({ data: { cart: { totalItem: 10 } } })),
	setTotalPrice: (totalItem, totalPrice) =>
		set((state) => ({
			data: {
				cart: { totalPrice: totalPrice, totalItem: totalItem },
				...state.data.products,
			},
		})),
	lush: { forest: { contains: { a: 'bear' } } },
	clearForest: () =>
		set(
			produce((state) => {
				state.lush.forest.contains = null;
			})
		),
	// sulit
	addQuantity: (id) =>
		set(
			produce((state) => {
				state.data.cart.products = state.data.cart.products.map((obj) => {
					if (obj.quantity < 20) if (obj.id === id) obj.quantity += 1;
					return obj;
				});
			})
		),
	reduceQuantity: (id) =>
		set(
			produce((state) => {
				state.data.cart.products = state.data.cart.products.map((obj) => {
					if (obj.quantity > 0) if (obj.id === id) obj.quantity -= 1;
					return obj;
				});
			})
		),
	increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	updateQuantity: (quantity) => set({ quantity: quantity }),
	removeAllBears: () => set({ bears: 0 }),
	updateBears: (newBears) => set({ bears: newBears }),
}));
