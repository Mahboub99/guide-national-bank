// function component
import React from 'react';
import { Link } from 'react-router-dom';
import NBEButton from '../../components/NBEButton/NBEButton';

import './Introduction.css';

function Introduction() {
	return (
		<div className="introduction">
			<div className="introduction__container">
			<p className="introduction__text">
				تم اعداد هذا الدليل الاسترشادي من قبل قطاع المعرفة والتطوير بهدف
				تعريفكم بالمسارات التدريبية المختلفة والمخصصة لمختلف قطاعات
				مصرفنا، برجاء تحديد المجموعة الخاصة بكم والقطاع والدرجة الوظيفية
				لعرض المسار التدريبي والبرامج والموضوعات الخاصة بكم.مجموعة الموارد البشرية	
			</p>
			
			<Link to="/registration" className="introduction__link">
				<NBEButton text="التالي" marginBottom ="-100px" />
			</Link>
			</div>
	
		</div>
	);
}

export default Introduction;