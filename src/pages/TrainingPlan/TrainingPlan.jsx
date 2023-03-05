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


import arrow from '../../assets/arrow.png';
import arrowLeft from '../../assets/arrow_left.png';

import { useSelector , useDispatch } from 'react-redux';
import {setActiveId} from '../../redux/activeSlice';
import { setRegister } from '../../redux/registerSlice'; 


import {setCurrentIndex} from '../../redux/currentIndexSlice';

import { Behavior } from './Behavior'
import { Government } from './Government'
import { Technology } from './Technology'
import { Future } from './Future'
import { Skills } from './Skills'

import {PDFDownloadLink} from '@react-pdf/renderer';

import {PDFDocumentNBE} from '../../components/PDFpage/PDFpage';

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
        dispatch(setCurrentIndex(0));
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
                {props.duration}
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
                   {props.name.substring(0, 50)}... 
                 </div>
                 <div className='courseCard__upperCard--text'>
                   {/** just 100 letters  of description */}
                     {props.description.substring(0, 100)}...
                 </div>
            </div>
            <div className='courseCard__lowerCard'>
               <LowerCardElement duration={props.duration} firstIcon={props.firstIcon} />          
               <LowerCardElement duration={props.attendance} firstIcon={props.secondIcon} />          
               <LowerCardElement duration={props.level} firstIcon={props.thirdIcon} />          
            </div>
        </div>
    );
}

function equal(fleft, fright) {
    

    // if fleft not null or fright not null return false
    if (fleft === null || fright === null) {
        return false;
    }
    // if fleft and fright are null return true
    if (fleft === null && fright === null) {
        return true;
    }

    if (fleft.includes(fright) || fright.includes(fleft)) {
       
        return true;
    }

    return false;
}

function filter(p, group, unit, level) {
    return p.filter(course => equal(course.group, group) && equal(course.unit, unit) && equal(course.level, level))
}

function TrainingPlan() {
    const activeId = useSelector((state) => state.active.value);
    const currentIndex = useSelector((state) => state.currentIndex.value);
    const [itemsPerPage, setItemsPerPage] = useState(4);
    const dispatch = useDispatch();

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
    
      

      let components = [];
      const sector = localStorage.getItem('اسم القطاع');
      const group = localStorage.getItem('اسم المجموعة');
      const degree = localStorage.getItem(' الدرجة الوظيفية');

      // if activeId = 1 for technology mak component = Technology 
        if (activeId === 0){
            components = Government;
            components = filter(components, group, sector ,degree);
        }else if(activeId === 1){
            components = Technology;
            components = filter(components, group, sector ,degree);
        }else if (activeId === 2){
            components = Future;
            components = filter(components, group, sector ,degree);
        }else if (activeId === 3){
            components = Skills;
            components = filter(components, group, sector ,degree);
        }else if (activeId === 4){
            components = Behavior;
            components = filter(components, group, sector ,degree);
        }

        const IncreaseRoll = () => {
            const index = (currentIndex + 1) % components.length;
            dispatch(setCurrentIndex(index));
        };
        const DecreaseRoll = () => {
            const index = (currentIndex - 1 + components.length) % components.length;
            dispatch(setCurrentIndex(index));
        };
        // if currentIndex + itemsPerPage > components.length then 
        const displayedComponents = components.slice(currentIndex, currentIndex + itemsPerPage);

      //clearSelectors :  make the setRegister value the defulte value and clear local storage items  sector group ans jobLevel 
        const clearSelectors = () => {
            localStorage.removeItem('اسم القطاع');
            localStorage.removeItem('اسم المجموعة');
            localStorage.removeItem(' الدرجة الوظيفية');
            dispatch(setRegister({value:'group'}));
        }
    return (
        <div className="trainingPlan" >
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
                        <CourseCard key={course.id} name={course.name} description={course.description} duration={course.duration} firstIcon={courseIcon1} attendance={course.attendance} secondIcon={courseIcon2} level={course.job_category} thirdIcon={courseIcon3} />
                    ))}
                </div>
            </div>
            <div className='trainingPlan__buttons' >
                <Link to="/registration" className='trainingPlan__Link' >
                    <NBEButton text="الرجوع" marginBottom ="0" onClick={clearSelectors} />
                </Link>
            
            
                <PDFDownloadLink document={<PDFDocumentNBE />} fileName="الخطة التدريبية للعاملية بالبنك الاهلي المصري.pdf">
                    {({ blob, url, loading, error }) =>
                        loading ? 'Loading document...' : <NBEButton text="تحميل الخطة" marginBottom ="0" />
                    }
                </PDFDownloadLink>
                
            </div>
        </div>
    );
}

export default TrainingPlan;