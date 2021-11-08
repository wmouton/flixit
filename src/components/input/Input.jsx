import React from 'react';
// import scss
import './input.scss';

// input functional component
const Input = (props) => {
	return (
		<input
			type={props.type}
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange ? (e) => props.onChange(e) : null}
		/>
	);
};

export default Input;
