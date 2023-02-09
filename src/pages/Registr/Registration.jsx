// react function component
import React from 'react';
import { Link } from 'react-router-dom';
import NBEButton from '../../components/NBEButton/NBEButton';
import RegistrationElement from '../../components/RegistrationElement/RegistrationElement';

import './Registration.css';

const registrationElements = [
	{
		number: '١',
		defaultText: 'اسم المجموعة',
		text: 'برجاء إختيار المجموعة',
		selectList: ['المجموعة أ', 'المجموعة ب', 'المجموعة ج']
	},
	{
		number: '٢',
		defaultText: 'اسم القطاع',
		text: 'برجاء إختيار القطاع',
		selectList: ['القطاع الأول', 'القطاع الثاني', 'القطاع الثالث']
	},
	{
		number: '٣',
		defaultText: ' الدرجة الوظيفية',
		text: 'برجاء إختيار الدرجة الوظيفية',
		selectList: ['الدرجة الأولى', 'الدرجة الثانية', 'الدرجة الثالثة']
	}
];
/*
 redner every  element component(CONDETIONAL RENDERING) after select the group and the sector and the job level
 */

 /**
  * use RegistrationElement component to render the 3 elements
  make the 3rd element hidden until the user select the group and the sector
  make the 2nd element hidden until the user select the group
 */

  



function Registration() {
	return (
		<div className="registration">
			<div className="registration__container">
				{/*loop over registrationElement */}
		
				<RegistrationElement
					defaultText={registrationElements[0].defaultText}
					number={registrationElements[0].number}
					text={registrationElements[0].text}
					selectList={registrationElements[0].selectList}
				/>

				{/* render the sector RegistrationElement when the first one is selected */}
				<RegistrationElement
					defaultText={registrationElements[1].defaultText}
					number={registrationElements[1].number}
					text={registrationElements[1].text}
					selectList={registrationElements[1].selectList}
				/>

				{/* render the job level RegistrationElement when the first and the second one is selected */}

				<RegistrationElement
					defaultText={registrationElements[2].defaultText}
					number={registrationElements[2].number}
					text={registrationElements[2].text}
					selectList={registrationElements[2].selectList}
				/>
				
		
				</div>
				<Link to="/registerCompleted" className="registration__link">
					<NBEButton text="تسجيل" marginBottom ="-100p" />
				</Link>
			</div>
	);
}
export default Registration;
