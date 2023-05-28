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
import courseIcon3 from '../../assets/courseIcon4.png';


import arrow from '../../assets/arrow.png';
import arrowLeft from '../../assets/arrow_left.png';

import { useSelector , useDispatch } from 'react-redux';
import {setActiveId} from '../../redux/activeSlice';
import { setRegister } from '../../redux/registerSlice'; 


import {setCurrentIndex} from '../../redux/currentIndexSlice';

import { Behavior } from './Behavior';
import { Government } from './Government';
import { Technology } from './Technology';
import { Future } from './Future';
import { Skills } from './Skills';
import { nameLinkMap, makeId } from './NameLink';
// import { result } from './result';

import {PDFDownloadLink} from '@react-pdf/renderer';
import {PDFDocumentNBE} from '../../components/PDFpage/PDFpage';

import './TrainingPlan.css';


const options = [
    {
        id: 0,
        text: 'الحوكمة والرقابة',
        icon: completed1,
        hoverText: "هي نظام الإدارة المبني على سياسات وقواعد تحكم صنع القرار داخل المؤسسة بما يضمن الشفافية والافصاح والفصل بين المسئوليات وتحقيق الفعالية في استغلال الموارد مع الالتزام الكامل بتعليمات الجهات الرقابية للحفاظ على استقرار وسلامة المؤسسة",
        
    },
    {
        id: 1,
        text: 'الوعي التكنولوجي',
        icon: completed2,
        hoverText: "هو القدرة على استخدام أدوات التكنولوجيا بشكل مسؤول ومناسب وفعال لإدارة المعلومات. وذلك من خلال امتلاك معرفة وفهم جيدين للتكنولوجيا الحديثة",
    },
    {
        id: 2,
        text: 'مستقبل الاعمال',
        icon: completed3,
        hoverText: "رؤية عملية لمجموعة من الحلول المبتكرة تمثل أدوات التمكين التى تدعم مواكبة التطور الذي يفرضه الواقع العملى المستقبلي",
    },
    {
        id: 3,
        text: 'المهارات الفنية',
        icon: completed4,
        hoverText: "وهي الدورات التدريبية في الموضوعات الفنية والمصرفية المتعلقة بأعمال البنك وكيفية تنفيذ المهام المصرفية اليومية على أكمل وجه",
    },
    {
        id: 4,
        text: 'المهارات السلوكية والإدارية',
        icon: completed5,
        hoverText: "هي القدرات والإمكانيات المختلفة التي يمتلكها الفرد بمستويات ودرجات معينة والتي تساهم في تطور وتحسن اداءة الوظيفي والشخصي بشكل مستمر وبالتالي تنعكس على نجاح المؤسسة",
    },
];

const pillarName = {
    0: 'الحوكمة والرقابة',
    1: 'الوعي التكنولوجي',
    2: 'مستقبل الاعمال',
    3: 'المهارات الفنية',
    4: 'المهارات السلوكية والإدارية',
}

const getPillarName = (pid) => {
    const pname = pillarName[pid];
    return !pname ? 'الحوكمة والرقابة' : pname
}

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
            {!hover && <img className='navOption__img' src={props.icon} alt={props.text} />}
            { !hover && <p className='navOption__text'>{props.text}</p>}
            {hover && <p className='navOption__hoverText'>{props.hoverText}</p>}
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

function LowerCardElementWithToolTip(props){
    const [hover, setHover] = useState(false);
    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="courseCard__tooltip"> 
            <div className='courseCard__lowerCard--element'>
                <div className='courseCard__lowerCard--text'>
                    {props.duration}
                </div>
                <div className='courseCard__lowerCard--icon-container'>
                    <img className='courseCard__lowerCard--icon' src={props.firstIcon} alt='courseIcon' />
                </div>   
            </div>
            {hover && <div className='tooltip'>
                الكفاءات المطلوب توافرها بجميع العاملين بالمؤسسة باختلاف وظائفهم ودرجاتهم الوظيفية والمسؤوليات المطلوبة منهم     
            </div>} 
        </div>
    );
}

function CourseCard(props){
    // if name not exist in map return default link
    //const id = makeId(props.name, props.group, props.sector, props.degree, props.pillar)
    let link = props.link ;
    let isLink = link.includes('http');
    console.log(isLink);
    if (!isLink) {
        link = 'سيتم الإعلان عن طريقة التسجيل لاحقا..';
        console.log(link)
    }
    // console.log(`${id} => ${link}`);
    
    return (
        <div className='courseCard'>
            <div className='courseCard__upperCard'>
                 <div className='courseCard__upperCard--title'>
                   {props.name} 
                 </div>
                 <div className='courseCard__upperCard--text'>
                   {/** just 100 letters  of description */}
                     {props.description}
                     {/* {props.description.length > 200 && '...'} */}
                 </div>
            </div>
            <div className='courseCard__lowerCard'>
               <LowerCardElement duration={props.duration} firstIcon={props.firstIcon} />          
               <LowerCardElement duration={props.attendance} firstIcon={props.secondIcon} />  
               {/* <LowerCardElementWithToolTip duration={props.level} firstIcon={props.thirdIcon} />        */}
            {/* NBE button link in new tab*/}

                {isLink && <a href={link} target="_blank">
                    <button className='courseCard__button'  >التسجيل</button>
                </a>}
                { !isLink && <p className='courseCard__notLink'>{link}</p>}
        
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
    fleft = fleft.trim();
    fright = fright.trim();

    if (fleft === fright) {
       
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
      const group = localStorage.getItem('اسم المجموعة');
      const sector = localStorage.getItem('اسم القطاع');
      const degree = localStorage.getItem(' الدرجة الوظيفية');

    //    // select objects that have course_category = "الحوكمة والرقابة"
    //    const Government = result.filter((obj) => obj.course_category === "الحوكمة والرقابة");
    //    // select objects that have course_category = "المهارات السلوكية والإدارية"
    //    const Behavior = result.filter((obj) => obj.course_category === "المهارات السلوكية والإدارية");
    //    // select objects that have course_category = "مستقبل الاعمال"
    //    const Future = result.filter((obj) => obj.course_category === "مستقبل الاعمال");
    //    // select objects that have course_category = "المهارات الفنية"
    //    const Skills = result.filter((obj) => obj.course_category === "المهارات الفنية");
    //    // select objects that have course_category = "الوعي التكنولوجي"
    //    const Technology = result.filter((obj) => obj.course_category === "الوعي التكنولوجي");

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
            const index = (currentIndex + itemsPerPage);
            dispatch(setCurrentIndex(index));
        };
        const DecreaseRoll = () => {
            const index = (currentIndex - itemsPerPage) ;
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
            dispatch(setActiveId(4));
        }
    return (
        <div className="trainingPlan" >
            <div className='trainingPlan__container'>
                {currentIndex + itemsPerPage < components.length && <img src={arrow} alt='arrow' className='trainingPlan__arrow--right' onClick={IncreaseRoll} />}
                {currentIndex - itemsPerPage >= 0 && <img src={arrowLeft} alt='arrow' className='trainingPlan__arrow--left' onClick={DecreaseRoll} />}
                
                <div className='trainingPlan__nav'>
                    {options.map((option) => (
                        <NavOption key={option.id} id={option.id} activeId={activeId} text={option.text}  icon={option.icon} hoverText={option.hoverText} />
                    ))}
                </div>
                {displayedComponents.length > 0 && <div className='trainingPlan__content'>
                    {displayedComponents.map((course) => (
                        <CourseCard 
                            key={course.id}
                            name={course.name}
                            description={course.description}
                            duration={course.duration}
                            firstIcon={courseIcon1}
                            attendance={course.attendance}
                            link={course.link}
                            secondIcon={courseIcon2}
                            group={group}
                            sector={sector}
                            degree={degree}
                            pillar={getPillarName(activeId)}
                            thirdIcon={courseIcon3}
                        />
                    ))}
                </div>}
                { displayedComponents.length === 0 && <div className="trainingPlan__content--null">سوف يتم اتاحة البرامج الخاصة بهذا القسم في أقرب وقت</div> }
            </div>
            <div className='trainingPlan__buttons' >
                <Link to="/registration" className='trainingPlan__Link' >
                    <NBEButton text="الرجوع" marginBottom ="0" onClick={clearSelectors} />
                </Link>
            
            
                {/* <PDFDownloadLink document={<PDFDocumentNBE />} fileName="الخطة التدريبية للعاملية بالبنك الاهلي المصري.pdf">
                    {({ blob, url, loading, error }) =>
                        loading ? 'Loading document...' : <NBEButton text="تحميل الخطة" marginBottom ="0" />
                    }
                </PDFDownloadLink> */}
                
            </div>
        </div>
    );
}

export default TrainingPlan;