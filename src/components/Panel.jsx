export const Panel = ({ children, className }) =>
	className !== undefined ? (
		<>
			<div className={`border-2 px-4 py-3 ${className}`}>{children}</div>
		</>
	) : (
		<>
			<div className={`border-2 px-4 py-3`}>{children}</div>
		</>
	);
