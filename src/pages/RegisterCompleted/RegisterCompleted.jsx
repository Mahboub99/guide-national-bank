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
    {hoverText: "وهي الدورات التدريبية في موضوعات متقدمة متعلقة بمستقبل البنك لمساعدتنا جميعاً على مواكبة التطور السريع في القطاع المصرفي", img: completed1, text: "مستقبل الأعمال"},
    {hoverText: "وهي الدورات التدريبية التي تغطي مهارات تكنولوجيا المعلومات وإستخدام أفضل وسائل التكنولوجيا الحديثة لإتمام المهام بشكل أفضل", img: completed2, text: "التكنولوجيا"},
    {hoverText: "وهي الدورات التدريبية المتعلقة بالحوكمة والالتزام داخل البنك والتي تساعدنا جميعاً على فهم القواعد والسلوكيات المتبعة", img: completed3, text: "الحوكمة و الرقابة"},
    {hoverText: "وهي الدورات التدريبية التي تهدف إلى تطوير المهارات الشخصية والإدارية والقيادية بهدف الوصول إلى مستوى الكفاءة الإدارية المطلوب للوظيفة", img: completed4, text: "المهارات الإدارية والسلوكية"},
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
            <Link to="/trainingPlan" className="registerCompleted__link">
                <NBEButton text="عرض المسار التدريبي" marginBottom="-100px" />
            </Link>
        </div>
    );
}


export default RegisterCompleted;
