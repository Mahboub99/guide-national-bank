// react function component
import React from 'react';
import { Link } from 'react-router-dom';
import NBEButton from '../../components/NBEButton/NBEButton';
import RegistrationElement from '../../components/RegistrationElement/RegistrationElement';
import { useSelector} from 'react-redux';
import { groups ,units ,levels } from './selectors';

import './Registration.css';


const registrationElements = [
	{
		number: '١',
		defaultText: 'اسم المجموعة',
		text: 'برجاء إختيار المجموعة',
		selectList: groups,
		nextChoice: 'sector'
	},
	{
		number: '٢',
		defaultText: 'اسم القطاع',
		text: 'برجاء إختيار القطاع',
		selectList: units,
		nextChoice: 'jobLevel'
	},
	{
		number: '٣',
		defaultText: ' الدرجة الوظيفية',
		text: 'برجاء إختيار الدرجة الوظيفية',
		selectList: levels,
		nextChoice: 'jobLevel'
	}
];



function Registration() {
	
	const register = useSelector((state) => state.register);
	
	return (
		<div className="registration">
			<div className="registration__container">
				{/*loop over registrationElement */}
	
				<RegistrationElement
					defaultText={registrationElements[0].defaultText}
					number={registrationElements[0].number}
					text={registrationElements[0].text}
					selectList={registrationElements[0].selectList}
					nextChoice={registrationElements[0].nextChoice}
				/>

				{/* render the sector RegistrationElement when the register state = sector or jobLevel*/}
				{register.value.value === 'sector' || register.value.value === 'jobLevel' ? (
					<RegistrationElement
						defaultText={registrationElements[1].defaultText}
						number={registrationElements[1].number}
						text={registrationElements[1].text}
						selectList={registrationElements[1].selectList}
						nextChoice={registrationElements[1].nextChoice}
					/>
				) : null}

				{/* render the job level RegistrationElement when the register state = jobLevel */}
				{register.value.value === 'jobLevel' ? (
					<RegistrationElement
						defaultText={registrationElements[2].defaultText}
						number={registrationElements[2].number}
						text={registrationElements[2].text}
						selectList={registrationElements[2].selectList}
						nextChoice={registrationElements[2].nextChoice}
					/>
				) : null}


		
			</div>
            <Link to="/registerCompleted" className="registration__link">
                <NBEButton text="تسجيل" marginBottom ="-100p" />
            </Link>
		</div>
	);
}
export default Registration;
