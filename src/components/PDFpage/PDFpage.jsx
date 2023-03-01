// PDFpage component function 

import React, { Component } from 'react';
import ReactPDF from '@react-pdf/renderer';

import Pdf from "react-to-pdf";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import NBEButton from '../../components/NBEButton/NBEButton';
import completed1 from '../../assets/completed3.png';
import completed2 from '../../assets/completed2.png';   
import completed3 from '../../assets/completed.png';
import completed4 from '../../assets/completed4.png';
import completed5 from '../../assets/completed5.png';

import courseIcon1 from '../../assets/courseIcon1.png';
import courseIcon2 from '../../assets/courseIcon2.png';
import courseIcon3 from '../../assets/courseIcon3.png';


import {Technology, Future ,Skills ,Government ,Behavior  } from '../../pages/TrainingPlan/coursesInfo';

import './PDFpage.css';

const ref = React.createRef();


function NavOption(props) {
    return (
        <div className='navOption__pdf'>
            <img className='navOption__img' src={props.icon} alt={props.text} />
            <p className='navOption__text'>{props.text}</p>
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


// Create Document Component
const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
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
        <div className='courseCard PDFpage__card--hight' >
            <div className='courseCard__upperCard'>
                 <div className='courseCard__upperCard--title'>
                   {props.name} 
                 </div>
                 <div className='courseCard__upperCard--text'>
                   {/** just 100 letters  of description */}
                     {props.description}
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



// ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
function PDFpage(props) {
    return (
        <div className='PDFpage'>
            {/* <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div className='PDFpage__container' ref={ref} > 
                <NavOption  text={options[0].text}   icon={options[0].icon} />
               <div className='PDFpage__courses'>
                    {courses[0].map((course) => (
                        <CourseCard key={course.id} name={course.name} description={course.description} duration={course.duration} firstIcon={courseIcon1} attendance={course.attendance} secondIcon={courseIcon2} level={course.job_category} thirdIcon={courseIcon3} />
                    ))}
               </div> 
            </div> */}
        </div>
    );
}



// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});


export default PDFpage;