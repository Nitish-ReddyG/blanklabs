import React from 'react';
import './Button.css';

const STYLES = ['btn--primary--solid', 'btn--warning--solid', 'btn--danger--solid',
 'btn--success--solid', 'btn--primary--outline', 'btn--warning--outline', 'btn--success--outline']
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile']

export const Button = ({
	children,
	type,
	onClick,
	buttonSize,
	buttonStyle,
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[4]
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonStyle : SIZES[0]
	return (
		<button className= {`btn ${checkButtonStyle} ${checkButtonSize} `} onClick={onClick} type={type}>
		{children}
		</button>);
};