import { useState } from 'react';

const useInput = (initialValue, validator) => {
	const [value, setValue] = useState(initialValue);
	const onChange = (event) => {
		const {
			target: { value },
		} = event;
		let willUpdate = true;
		if (typeof validator === 'function') willUpdate = validator(value);
		else console.error('validator is not a function.');
		if (willUpdate) setValue(value);
	};

	return { value, onChange };
};

// Todo: 이걸로 기존 input 태그를 감싸는 component 필요
export default useInput;
