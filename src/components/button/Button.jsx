import React from 'react';
// import the prop types from prop-types
import PropTypes from 'prop-types';
// import scss for button
import './button.scss';

// button functional component
const Button = (props) => {
	return (
		<button
			className={`btn ${props.className}`}
			onClick={props.onClick ? () => props.onClick() : null}
		>
			{props.children}
		</button>
	);
};

export const OutlineButton = (props) => {
	return (
		<Button
			className={`btn-outline ${props.className}`}
			onClick={props.onClick ? () => props.onClick() : null}
		>
			{props.children}
		</Button>
	);
};

Button.propTypes = {
	onClick: PropTypes.func,
};

export default Button;
