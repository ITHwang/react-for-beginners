import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

const PwInput = ({ type, placeholder }) => {
	const maxLen = (value) => value.length <= 10;
	const { value, onChange } = useInput('', maxLen);

	return (
		<div>
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
};

PwInput.propTypes = {
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
};

export default PwInput;
