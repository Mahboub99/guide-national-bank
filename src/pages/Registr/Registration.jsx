// react function component
import React from 'react';
import { Link } from 'react-router-dom';
import NBEButton from '../../components/NBEButton/NBEButton';
import RegistrationElement from '../../components/RegistrationElement/RegistrationElement';

import './Registration.css';

const registrationElements = [
	{
		number: '١',
		text: 'برجاء إختيار المجموعة',
		selectList: ['المجموعة أ', 'المجموعة ب', 'المجموعة ج']
	},
	{
		number: '٢',
		text: 'برجاء إختيار القطاع',
		selectList: ['القطاع الأول', 'القطاع الثاني', 'القطاع الثالث']
	},
	{
		number: '٣',
		text: 'برجاء إختيار الدرجة الوظيفية',
		selectList: ['الدرجة الأولى', 'الدرجة الثانية', 'الدرجة الثالثة']
	}
];
/*
 redner every  element component(CONDETIONAL RENDERING) after select the group and the sector and the job level
 */

 

function Registration() {
	return (
		<div className="registration">
			<div className="registration__container">
				{/*loop over registrationElement */}
				{registrationElements.map((element, index) => {
					return (
						<RegistrationElement
							key={index}
							number={element.number}
							text={element.text}
							selectList={element.selectList}
						/>
					);
				})}
				</div>
				<Link to="/registerCompleted" className="registration__link">
					<NBEButton text="تسجيل" marginBottom ="-100p" />
				</Link>
			</div>
	);
}
export default Registration;
