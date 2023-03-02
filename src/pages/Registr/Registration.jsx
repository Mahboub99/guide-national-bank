// react function component
import React from 'react';
import { Link } from 'react-router-dom';
import NBEButton from '../../components/NBEButton/NBEButton';
import RegistrationElement from '../../components/RegistrationElement/RegistrationElement';
import { useSelector} from 'react-redux';
import { groups ,units ,levels ,departments } from './selectors';

import './Registration.css';





function Registration() {
	
	const register = useSelector((state) => state.register);
    const group = localStorage.getItem('اسم المجموعة');

    
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
            selectList: departments[group],//departments[groupName.value.value],
            nextChoice: 'jobLevel'
        },
        {
            number: '٣',
            defaultText: ' الدرجة الوظيفية',
            text: 'برجاء إختيار الدرجة الوظيفية',
            selectList: levels,
            nextChoice: 'end'
        }
    ];
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
				{register.value.value === 'sector' || register.value.value === 'jobLevel' || register.value.value === 'end' ? (
					<RegistrationElement
						defaultText={registrationElements[1].defaultText}
						number={registrationElements[1].number}
						text={registrationElements[1].text}
						selectList={registrationElements[1].selectList}
						nextChoice={registrationElements[1].nextChoice}
					/>
				) : null}

				{/* render the job level RegistrationElement when the register state = jobLevel */}
				{register.value.value === 'jobLevel' || register.value.value === 'end'  ? (
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
                {register.value.value === 'end' ?(<NBEButton text="عرض المسار التدريبي" marginBottom ="-100p"  />):null}
            </Link>
		</div>
	);
}
export default Registration;
