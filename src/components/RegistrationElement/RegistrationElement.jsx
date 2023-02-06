// generecic regestration element component has a  select element takes 3 props number and slelect list  and text
// cricle with the number at th top of the component then the text and the select list is the list of the options

import React from 'react';
// from components SelectMenu 
import SelectMenu from '../SelectMenu/SelectMenu';

import './RegistrationElement.css';

const options = ['المجموعة أ', 'المجموعة ب', 'المجموعة ج'];

function RegistrationElement(props) {
	return (
		<div className="registrationElement">
			<div className="registrationElement__container">
				<div className="registrationElement__circle">
					<p className="registrationElement__circle--text">{props.number}</p>
				</div>	
				
				<p className="registrationElement__container--text">{props.text}</p>
				<div className='registrationElement__container--select'>
					<SelectMenu defaultText="اسم المجموعة" options={options}/>		
				</div>
			</div>
		</div>
	);
}

export default RegistrationElement;