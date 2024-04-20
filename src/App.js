import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { data } from './data/data';
import ProductItem from './components/ProductItem';
import CartItem from './components/CartItem';
import CartTotal from './components/CartTotal';
import Cart from './pages/Cart';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Product from './pages/Product';
import Navigation from './components/Navigation';
import { useStore } from './store/useStore';

function App() {
	// const router = createBrowserRouter([
	// 	{
	// 		path: '/',
	// 		element: <Product />,
	// 	},
	// 	{
	// 		path: '/cart',
	// 		element: <Cart />,
	// 	},
	// ]);
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
			<RouterProvider router={router} />
		</>
		// <div>
		// 	{/* <Navigation /> */}
		// 	{/* <Link to='/'>Product</Link> */}
		// 	<BrowserRouter>
		// 		<Switch>
		// 			<Route path='/'>
		// 				<Product />
		// 			</Route>
		// 		</Switch>
		// 	</BrowserRouter>
		// 	{/* <Link to='/'>Cart</Link> */}
		// 	{/* <RouterProvider router={router} />; */}
		// </div>
	);
}

export default App;
