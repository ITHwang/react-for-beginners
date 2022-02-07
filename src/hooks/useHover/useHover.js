import { useEffect } from 'react';

export default useHover = (onHover) => {
	const element = useRef();

	useEffect(() => {
		if (typeof onHover !== 'function') return;
		const target = element.current;
		if (target) target.addEventListener('mouseenter', onHover);
		return () => {
			if (target) target.removeEventListener('mouseenter', onHover);
		};
	}, []);

	return element;
};
