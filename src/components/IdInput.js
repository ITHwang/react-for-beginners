import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

const IdInput = ({ placeholder }) => {
	const maxLen = (value) => value.length <= 10;
	const { value, onChange } = useInput('', maxLen);

	return (
		<div>
			<input placeholder={placeholder} value={value} onChange={onChange} />
		</div>
	);
};

IdInput.propTypes = {
	placeholder: PropTypes.string.isRequired,
};

export default IdInput;
