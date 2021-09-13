import PropTypes from 'prop-types';

export default function ButtonBack(props) {
  return (
    <button type="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

ButtonBack.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};
