// TrainingPlan  function component 
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NBEButton from '../../components/NBEButton/NBEButton';

import completed1 from '../../assets/completed3.png';
import completed2 from '../../assets/completed2.png';   
import completed3 from '../../assets/completed.png';
import completed4 from '../../assets/completed4.png';
import completed5 from '../../assets/completed5.png';

import courseIcon1 from '../../assets/courseIcon1.png';
import courseIcon2 from '../../assets/courseIcon2.png';
import courseIcon3 from '../../assets/courseIcon3.png';
import courseIcon4 from '../../assets/courseIcon4.png';
import courseIcon5 from '../../assets/courseIcon5.png';
import courseIcon6 from '../../assets/courseIcon6.png';

import { useSelector , useDispatch } from 'react-redux';
import {setActiveId} from '../../redux/activeSlice';

import './TrainingPlan.css';

const options = [
    {
        id: 1,
        text: 'الحوكمة و الرقابة',
        icon: completed1,
    },
    {
        id: 2,
        text: 'التكنولوجيا',
        icon: completed2,
    },
    {
        id: 3,
        text: 'مستقبل الاعمال',
        icon: completed3,
    },
    {
        id: 4,
        text: 'المهارات الفنية',
        icon: completed4,
    },
    {
        id: 5,
        text: 'المهارات الإدارية والسلوكية',
        icon: completed5,
    },
];

const courseInfo = { 
    Governance: [
            {
                id: 1,
                title: 'اللوائح المالية',
                text: 'تغطى الدورة التدريبية كافة اللوائح الداخلية المالية المعمول بها داخل البنك وكيفية أتباعها بطريقة صحيحة',
                firstText: '٤ أيام',
                firstIcon: courseIcon1,
                secondText: 'التدريب الإلكتروني',
                secondIcon: courseIcon2,
                thirdText: 'الكفاءات الوظيفية',
                thirdIcon: courseIcon4,
            },
            {
                id: 2,
                title: 'المراقبة والمراجعة',
                text: 'تهدف الدورة التدريبية إلى تعريفك بأساسيات عملية الرقابة الداخلية والمراجعة وكيفية متابعتها',
                firstText: 'يومين',
                firstIcon: courseIcon1,
                secondText: 'التدريب الإلكتروني',
                secondIcon: courseIcon2,
                thirdText: 'الكفاءات القيادية',
                thirdIcon: courseIcon5,
            },
            {
                id: 3,
                title: 'إدارة المخاطر',
                text: 'تهدف الدورة التدريبية إلى تعريفك بأساسيات عملية إدارة المخاطر وكيفية وضع خطة إدارة المخاطر',
                firstText: '٤ أيام',
                firstIcon: courseIcon1,
                secondText: 'مركز تدريب البنك الأهلي',
                secondIcon: courseIcon3,
                thirdText: 'الكفاءات الاساسية',
                thirdIcon: courseIcon6,
            },
            {
                id: 4,
                title: 'غسل الأموال',
                text: 'تغطي الدورة التدريبية الأساليب المختلفة لعملية غسل الأموال وكيفية مكافحتها بالطريقة الصحيحة',
                firstText: '٣ أيام',
                firstIcon: courseIcon1,
                secondText: 'التدريب الإلكتروني',
                secondIcon: courseIcon2,
                thirdText: 'الكفاءات الوظيفية',
                thirdIcon: courseIcon4,
            }
        ],

}

function NavOption(props) {
    const [active, setActive] = useState(false);
    const [hover, setHover] = useState(false);
    const dispatch = useDispatch();
    function handleClick() { 
        dispatch(setActiveId(props.id));
    }


    useEffect(() => {
        if (props.activeId === props.id) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [props.activeId, props.id]);

    return (
        <div className={`navOption ${active ? 'navOption__active' : ''} ${hover ? 'navOption__hover' : ''}`} onClick={handleClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img className='navOption__img' src={props.icon} alt={props.text} />
            <p className='navOption__text'>{props.text}</p>
        </div>
    );
}


function LowerCardElement(props){
    return (
        <div className='courseCard__lowerCard--element'>
            <div className='courseCard__lowerCard--text'>
                {props.firstText}
            </div>
            <div className='courseCard__lowerCard--icon-container'>
                <img className='courseCard__lowerCard--icon' src={props.firstIcon} alt='courseIcon' />
            </div>
        </div>
    );
}

function CourseCard(props){
    return (
        <div className='courseCard'>
            <div className='courseCard__upperCard'>
                 <div className='courseCard__upperCard--title'>
                   {props.title} 
                 </div>
                 <div className='courseCard__upperCard--text'>
                   {props.text}
                 </div>
            </div>
            <div className='courseCard__lowerCard'>
               <LowerCardElement firstText={props.firstText} firstIcon={props.firstIcon} />          
               <LowerCardElement firstText={props.secondText} firstIcon={props.secondIcon} />          
               <LowerCardElement firstText={props.thirdText} firstIcon={props.thirdIcon} />          
            </div>
        </div>
    );
}

function TrainingPlan() {
    const activeId = useSelector((state) => state.active.value);

    return (
        <div className="trainingPlan">
            <div className='trainingPlan__container'>
                <div className='trainingPlan__nav'>
                    {options.map((option) => (
                        <NavOption key={option.id} id={option.id} activeId={activeId} text={option.text}  icon={option.icon} />
                    ))}
                </div>
                <div className='trainingPlan__content'>
                    {/** loop over courseInfo.Governance */}
                    {courseInfo.Governance.map((course) => (
                        <CourseCard key={course.id} title={course.title} text={course.text} firstText={course.firstText} firstIcon={course.firstIcon} secondText={course.secondText} secondIcon={course.secondIcon} thirdText={course.thirdText} thirdIcon={course.thirdIcon} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TrainingPlan;