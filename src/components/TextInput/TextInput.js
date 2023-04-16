import styles from './TextInput.module.scss';
import PropTypes from 'prop-types';

const TextInput = ({ value, onChange, placeholder}) => {
  return (
    <input 
      className={styles.input}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type="text" />
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}

export default TextInput;