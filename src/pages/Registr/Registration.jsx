// react function component
import React from 'react';
import { Link } from 'react-router-dom';
import NBEButton from '../../components/NBEButton/NBEButton';
import RegistrationElement from '../../components/RegistrationElement/RegistrationElement';

import './Registration.css';

// function component  RegistrationElement with props

const selectList = ["ا" , "ب" , "ج" ];

function Registration() {
	return (
		<div className="registration">
			<div className="registration__container">

					<RegistrationElement
						number="1"
						selectList= {selectList}
					/>
				</div>
			</div>
	);
}
export default Registration;
