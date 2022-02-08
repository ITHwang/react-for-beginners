export const useBeforeLeave = (onBefore) => {
	const handle = (event) => {
		const { clientY } = event;
		if (clientY <= 30) onBefore();
	};

	useEffect(() => {
		if (typeof onBefore !== 'function') return;
		document.addEventListener('mousemove', handle);
		return () => document.removeEventListener('mousemove', handle);
	}, []);
};
