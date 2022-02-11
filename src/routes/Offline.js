export const Offline = () => {
	const onClick = () => {
		window.location.href = '/';
	};
	return (
		<div>
			<div>hell no</div>
			<div>
				<button type='button' onClick={onClick}>
					retry
				</button>
			</div>
		</div>
	);
};
