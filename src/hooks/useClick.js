import { useEffect, useRef } from 'react';

const useClick = (onClick) => {
	const element = useRef();

	useEffect(() => {
		if (typeof onClick !== 'function') return;

		const target = element.current;
		if (target) target.addEventListener('click', onClick);

		return () => {
			if (target) target.removeEventListener('click', onClick);
		};
	}, []);

	return element;
};

export default useClick;
