// custom buuton component
import React from 'react';
import './NBEButton.css';
// if props.marginBottom.length > 0 ? props.marginBottom : '0' is true then return props.marginBottom else return '0'
function NBEButton(props) {
	// refersh the page
	return (
		<button
			className="nbeButton"
			style={{ marginBottom: props.marginBottom.length > 0 ? props.marginBottom : '0', width: props.width }}
			onClick={props.onClick}
		>
			{props.text}
		</button>
	);
}

export default NBEButton; 