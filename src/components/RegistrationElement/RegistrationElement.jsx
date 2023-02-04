// generecic regestration element component has a  select element takes 3 props number and slelect list  and text
// cricle with the number at th top of the component then the text and the select list is the list of the options

import React from 'react';
import './RegistrationElement.css';

function RegistrationElement(props) {
	return (
		<div className="registrationElement">
			<div className="registrationElement__container">
				<div className="registrationElement__circle">
					<p className="registrationElement__circle--text">{props.number}</p>
				</div>
				<p className="registrationElement__text">{props.text}</p>
				<select className="registrationElement__select">
					{props.selectList.map((item) => {
						return <option value={item}>{item}</option>;
					})}
				</select>
			</div>
		</div>
	);
}

export default RegistrationElement;