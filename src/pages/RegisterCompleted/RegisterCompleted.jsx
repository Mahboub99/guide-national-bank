// react  function component
import React from 'react';
import RegisterCompletedElement from '../../components/RegisterCompletedElement/RegisterCompletedElement';
import NBEButton from '../../components/NBEButton/NBEButton';
import { Link } from 'react-router-dom';
import completed1 from '../../assets/completed.png';
import completed2 from '../../assets/completed2.png';   
import completed3 from '../../assets/completed3.png';
import completed4 from '../../assets/completed5.png';
import completed5 from '../../assets/completed4.png';

import './RegisterCompleted.css';

/* array of objects of text an img and hoverText */
const completed = [
    {hoverText: "رؤية عملية لمجموعة من الحلول المبتكرة تمثل أدوات التمكين التى تدعم مواكبة التطور الذي يفرضه الواقع العملى المستقبلي", img: completed1, text: "مستقبل الأعمال"},
    {hoverText: "هو القدرة على استخدام أدوات التكنولوجيا بشكل مسؤول ومناسب وفعال لإدارة المعلومات. وذلك من خلال امتلاك معرفة وفهم جيدين للتكنولوجيا الحديثة", img: completed2, text: "الوعي التكنولوجي"},
    {hoverText: "هي نظام الإدارة المبني على سياسات وقواعد تحكم صنع القرار داخل المؤسسة بما يضمن الشفافية والافصاح والفصل بين المسئوليات وتحقيق الفعالية في استغلال الموارد مع الالتزام الكامل بتعليمات الجهات الرقابية للحفاظ على استقرار وسلامة المؤسسة", img: completed3, text: "الحوكمة و الرقابة"},
];

const completed_2 = [
    {hoverText: "هي القدرات والإمكانيات المختلفة التي يمتلكها الفرد بمستويات ودرجات معينة والتي تساهم في تطور وتحسن اداءة الوظيفي والشخصي بشكل مستمر وبالتالي تنعكس على نجاح المؤسسة", img: completed4, text: "المهارات السلوكية و الإدارية "},
    {hoverText: "وهي الدورات التدريبية في الموضوعات الفنية والمصرفية المتعلقة بأعمال البنك وكيفية تنفيذ المهام المصرفية اليومية على أكمل وجه", img: completed5, text: "المهارات الفنية"},
];

// RegisterCompleted function component put  RegisterCompletedElement component in it on container and then a nbebutton outside the container 
function RegisterCompleted() {
    return (
        
        <div className="registerCompleted">
            <p className='registerCompleted__text' >نشكركم على استكمال البيانات</p>
            <p className='registerCompleted__text'>فيما يلي سيتم عرض المسار التدريبي المخصص لكم مقسم الى 5 اقسام أساسية</p>
            <p className='registerCompleted__text'>كل منها يحتوي على مجموعة من البرامج</p>

            <div className="registerCompleted__container">
                {completed.map((item, index) => {
                    return <RegisterCompletedElement key={index} text={item.text} img={item.img} hoverText={item.hoverText}/>
                })}
              
            </div>
            <div className="registerCompleted__container registerCompleted__container--margin--bottom">
                {completed_2.map((item, index) => {
                    return <RegisterCompletedElement key={index} text={item.text} img={item.img} hoverText={item.hoverText}/>
                })}
              
            </div>
            <Link to="/trainingPlan" className="registerCompleted__link">
                <NBEButton text="عرض المسار التدريبي" marginBottom="-100px" />
            </Link>
        </div>
    );
}


export default RegisterCompleted;
