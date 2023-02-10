// TrainingPlan  function component 
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NBEButton from '../../components/NBEButton/NBEButton';

import completed1 from '../../assets/completed3.png';
import completed2 from '../../assets/completed2.png';   
import completed3 from '../../assets/completed.png';
import completed4 from '../../assets/completed4.png';
import completed5 from '../../assets/completed5.png';

import arrow from '../../assets/arrow.png';
import arrowLeft from '../../assets/arrow_left.png';

import { useSelector , useDispatch } from 'react-redux';
import {setActiveId} from '../../redux/activeSlice';
import {courseInfo} from './coursesInfo';


import './TrainingPlan.css';

const options = [
    {
        id: 0,
        text: 'الحوكمة و الرقابة',
        icon: completed1,
    },
    {
        id: 1,
        text: 'التكنولوجيا',
        icon: completed2,
    },
    {
        id: 2,
        text: 'مستقبل الاعمال',
        icon: completed3,
    },
    {
        id: 3,
        text: 'المهارات الفنية',
        icon: completed4,
    },
    {
        id: 4,
        text: 'المهارات الإدارية والسلوكية',
        icon: completed5,
    },
];

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
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 1620) {
            setItemsPerPage(4);
          } else if (window.innerWidth >= 1220) {
            setItemsPerPage(3);
          } else if (window.innerWidth >= 820) {
            setItemsPerPage(2);
          } else {
            setItemsPerPage(1);
          }
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      const components = courseInfo[activeId];
      const IncreaseRoll = () => {
          console.log(currentIndex);
          console.log(components.length);
          setCurrentIndex(index => (index + 1) % components.length);
      };
      const DecreaseRoll = () => {
            setCurrentIndex(index => (index - 1 + components.length) % components.length);
      };

      const displayedComponents = components.slice(currentIndex, currentIndex + itemsPerPage);
    
    return (
        <div className="trainingPlan">
            <div className='trainingPlan__container'>
                <img src={arrow} alt='arrow' className='trainingPlan__arrow--right' onClick={IncreaseRoll} />
                <img src={arrowLeft} alt='arrow' className='trainingPlan__arrow--left' onClick={DecreaseRoll} />
                
                <div className='trainingPlan__nav'>
                    {options.map((option) => (
                        <NavOption key={option.id} id={option.id} activeId={activeId} text={option.text}  icon={option.icon} />
                    ))}
                </div>
                <div className='trainingPlan__content'>
                    {/** loop over courseInfo.Governance */}
                    {displayedComponents.map((course) => (
                        <CourseCard key={course.id} title={course.title} text={course.text} firstText={course.firstText} firstIcon={course.firstIcon} secondText={course.secondText} secondIcon={course.secondIcon} thirdText={course.thirdText} thirdIcon={course.thirdIcon} />
                    ))}
                </div>
            </div>
            <div className='trainingPlan__buttons'>
                <Link to="/registerCompleted" className='trainingPlan__Link' >
                    <NBEButton text="الرجوع" marginBottom ="0" />
                </Link>
                <NBEButton text="تحميل الخطة" marginBottom ="0" />
            </div>
        </div>
    );
}

export default TrainingPlan;