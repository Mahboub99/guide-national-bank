// PDFpage component function 

import React from 'react';

import completed1 from '../../assets/completed3.png';
import completed2 from '../../assets/completed2.png';   
import completed3 from '../../assets/completed.png';
import completed4 from '../../assets/completed4.png';
import completed5 from '../../assets/completed5.png';

import courseIcon1 from '../../assets/courseIcon1.png';
import courseIcon2 from '../../assets/courseIcon2.png';
import courseIcon3 from '../../assets/courseIcon4.png';


import {Technology, Future ,Skills ,Government ,Behavior  } from '../../pages/TrainingPlan/coursesInfo';

import {Image,Text , Document , Page, View, PDFViewer} from '@react-pdf/renderer';

import Styles from './Styles';

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

function IntroductionTitlePagePDF(props) {
    return (
        <Page size={[1400, 800]} >
            <View style={Styles.introductionTitlePage__container}>
                <Text style={Styles.introductionTitlePage__text}>الخطة التدريبية</Text>
                <Text style={Styles.introductionTitlePage__text}>للعاملين بالبنك الاهلي المصري</Text>
            </View>
        </Page>
    );
}

function SectorTitlePDF(props) {
    return (
        <View style={Styles.sectorTitle__pdf__container}>
            <Text>الخطة التدريبية</Text>
            <Text>للعاملين بالبنك الاهلي المصري</Text>
            <View style={Styles.sectorTitle__pdf}>
                <View style={Styles.sectorTitle__pdfImageContainer}>
                    <Image style={Styles.sectorTitle__pdf__img} src={props.icon} />
                </View>
                
                <Text style={Styles.sectorTitle__text}>{props.text}</Text>
            </View>
        </View>
    );
}

function LowerCardElementPDF(props){
    return (
        <View style={Styles.courseCardPdf__lowerCard__element}>
           
            <Text style={Styles.courseCardPdf__lowerCard__text}>{props.duration}</Text>
            <View style={Styles.courseCardPdf__lowerCard__iconContainer}>
                <Image style={Styles.courseCardPdf__lowerCard__icon} src={props.firstIcon} />
            </View>
        </View>
    );
}

function CourseCardPDF(props){
    return (
        <View style={Styles.courseCardPdf}>
            <View style={Styles.courseCardPdf__upperCard}>
                <Text style={Styles.courseCardPdf__upperCard__title}>{props.name}</Text>
                <Text style={Styles.courseCardPdf__upperCard__text}>{props.description}</Text>
            </View>
            <View style={Styles.courseCardPdf__lowerCard}>
                <LowerCardElementPDF duration={props.duration} firstIcon={props.firstIcon} />
                <LowerCardElementPDF duration={props.attendance} firstIcon={props.secondIcon} />
                <LowerCardElementPDF duration={props.level} firstIcon={props.thirdIcon} />
            </View>
        </View>
    );
}

function PDFSinglePage(props) {
    return (
        /**page with arabic langauge */
        <Page style={Styles.page} size={[1400, 1600]}>
            <SectorTitlePDF text={props.option.text} icon={props.option.icon} />
            <View style={Styles.PDFpage__courses}>
                {props.courses.map((course) => (
                    <CourseCardPDF key={course.id} name={course.name} description={course.description} duration={course.duration} firstIcon={courseIcon1} attendance={course.attendance} secondIcon={courseIcon2} level={course.job_category} thirdIcon={courseIcon3} />
                ))}
            </View>
        </Page>

    );
}

const PDFDocumentNBE = () => (
    <Document >
        <IntroductionTitlePagePDF />
        {courses[0].length > 0 && <PDFSinglePage courses={courses[0]} option={options[0]}/> }
        {courses[1].length > 0 && <PDFSinglePage courses={courses[1]} option={options[1]}/> }
        {courses[2].length > 0 && <PDFSinglePage courses={courses[2]} option={options[2]}/> }
        {courses[3].length > 0 && <PDFSinglePage courses={courses[3]} option={options[3]}/> }
        {courses[4].length > 0 && <PDFSinglePage courses={courses[4]} option={options[4]}/> }
    </Document>
);

function PDFpage(props) {
    return (
        <div>
            
            <PDFViewer width={1400} height={600}>
                <PDFDocumentNBE />
            </PDFViewer>
        </div>
    );
}

// PDFDocumentNBE 
export { PDFDocumentNBE} ;

export default PDFpage;

