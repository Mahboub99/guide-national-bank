// PDFpage component function 

import React, { Component } from 'react';

import NBEButton from '../../components/NBEButton/NBEButton';
import completed1 from '../../assets/completed3.png';
import completed2 from '../../assets/completed2.png';   
import completed3 from '../../assets/completed.png';
import completed4 from '../../assets/completed4.png';
import completed5 from '../../assets/completed5.png';

import courseIcon1 from '../../assets/courseIcon1.png';
import courseIcon2 from '../../assets/courseIcon2.png';
import courseIcon3 from '../../assets/courseIcon4.png';


import {Technology, Future ,Skills ,Government ,Behavior  } from '../../pages/TrainingPlan/coursesInfo';
import { html2pdf } from 'html2pdf.js';
import { print , Preview  } from 'react-html2pdf';

// import {html2pdf} from './htmlTopdf/html2pdf.bundle.js';

import './PDFpage.css';

const ref = React.createRef();



function SectorTitle(props) {
    return (
        <div className='sectorTitle__pdf'>
            <div className='sectorTitle__pdfImageContainer'>
                <img className='sectorTitle__pdf--img' src={props.icon} alt={props.text} />
            </div>
            <p className='sectorTitle__text'>{props.text}</p>
        </div>
    );
}


function equal(fleft, fright) {
    
    if (fleft.includes(fright) || fright.includes(fleft)) {
       
        return true;
    }

    return false;
}

function filter(p, group, unit, level) {
    return p.filter(course => equal(course.group, group) && equal(course.unit, unit) && equal(course.level, level))
}


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

const sector = localStorage.getItem('اسم القطاع');
const group = localStorage.getItem('اسم المجموعة');
const degree = localStorage.getItem(' الدرجة الوظيفية');

const courses = [
    filter(Government, group, sector ,degree),
    filter(Technology, group, sector ,degree),
    filter(Future, group, sector ,degree),
    filter(Skills, group, sector ,degree),
    filter(Behavior, group, sector ,degree)
]    


function LowerCardElement(props){
    return (
        <div className='courseCardPdf__lowerCard--element'>
            <div className='courseCardPdf__lowerCard--text'>
                {props.duration}
            </div>
            <div className='courseCardPdf__lowerCard--icon-container'>
                <img className='courseCardPdf__lowerCard--icon' src={props.firstIcon} alt='courseIcon' />
            </div>
        </div>
    );
}

function CourseCard(props){
    return (
        <div className='courseCardPdf' >
            <div className='courseCardPdf__upperCard'>
                 <div className='courseCardPdf__upperCard--title'>
                   {props.name} 
                 </div>
                 <div className='courseCardPdf__upperCard--text'>
                   {/** just 100 letters  of description */}
                     {props.description}
                 </div>
            </div>
            <div className='courseCardPdf__lowerCard'>
               <LowerCardElement duration={props.duration} firstIcon={props.firstIcon} />          
               <LowerCardElement duration={props.attendance} firstIcon={props.secondIcon} />          
               <LowerCardElement duration={props.level} firstIcon={props.thirdIcon} />          
            </div>
        </div>
    );
}

function SectorElement(props){
    return (
        <div>
            <h1>الخطة التدريبية</h1>
            <h1>للعاملين بالبنك الاهلي المصري</h1>
            <div className='PDFpage__container'  > 
                    <SectorTitle  text={props.optionElement.text}   icon={props.optionElement.icon} />
                <div className='PDFpage__courses'>
                        {props.coursesElement.map((course) => (
                            <CourseCard key={course.id} name={course.name} description={course.description} duration={course.duration} firstIcon={courseIcon1} attendance={course.attendance} secondIcon={courseIcon2} level={course.job_category} thirdIcon={courseIcon3} />
                        ))}
                </div> 
            </div>
        </div>

    );
}

// ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
function PDFpage(props) {
    return (
        <div>
            <div className='PDFpage'>
                <div className='PDFpage__coursesWarper'>
                    <Preview id={'toPdf'} >
                        <SectorElement optionElement={options[0]} coursesElement={courses[0]}/>
                        <SectorElement optionElement={options[1]} coursesElement={courses[1]}/>
                        <SectorElement optionElement={options[2]} coursesElement={courses[2]}/>
                        <SectorElement optionElement={options[3]} coursesElement={courses[3]}/>
                        <SectorElement optionElement={options[4]} coursesElement={courses[4]}/>
                    </Preview>
                </div>
            </div>
            <NBEButton  text="تحميل الخطة" marginBottom ="0" onClick={()=>print('الخطة التدريبية للعاملين بالبك الاهلي المصري', 'toPdf')} />
        </div>
    );
}

export default PDFpage;

