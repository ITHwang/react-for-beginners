import { useEffect, useRef } from 'react';

const useHover = (mouseover, mouseout) => {
	const element = useRef();

	useEffect(() => {
		const target = element.current;
		if (target) {
			target.addEventListener('mouseover', mouseover);
			target.addEventListener('mouseout', mouseout);
		}
		return () => {
			if (target) {
				target.removeEventListener('mouseover', mouseover);
				target.removeEventListener('mouseout', mouseout);
			}
		};
	}, []);

	return element;
};

export default useHover;
