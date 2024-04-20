export const Button = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='bg-green-600 text-white rounded-lg w-full py-2 text-sm font-semibold mt-auto'
		>
			{children}
		</button>
	);
};
