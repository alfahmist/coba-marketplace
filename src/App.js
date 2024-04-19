import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { data } from './data/data';
import ProductItem from './components/ProductItem';
import CartItem from './components/CartItem';
import CartTotal from './components/CartTotal';
import Cart from './pages/Cart';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Product from './pages/Product';
import Navigation from './components/Navigation';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Product />,
		},
		{
			path: '/cart',
			element: <Cart />,
		},
	]);

	return (
		<>
			<Navigation />;
			<RouterProvider router={router} />;
		</>
	);
}

export default App;
