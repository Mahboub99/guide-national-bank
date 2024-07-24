import React from 'react';

import './ELearningOptionsPages.css';

function ELearning7Almentor() {
    return (
        <div className='eLearningOptionPage__text'>
            <p className='eLearningOptionPage__text--green eLearningOptionPage--margin-100'>
                اكبر منصة عربية للتعليم الإليكتروني تحتوى <span className='eLearningOptionPage__text--orange' > على دوارات تدريبية و احاديث مصورة
                و كتب</span> في لمجموعة متميزة من المدربين و أصحاب الخبرة
            </p>
            <p className='eLearningOptionPage__text--green eLearningOptionPage--margin-50'>
                <p>Almentor.net خطوات الدخول علي منصة </p>
                <p style={{direction: "rtl"}}>
                    <span>الدخول من خلال</span>
                    <span className='eLearningOptionPage__text--orange' > تطبيق NBE Staff</span>
                    <span> واتباع الخطوات المذكورة </span>
                </p>
                <p> او الدخول علي </p> 
                <a className='eLearningOptionPage__text--orange'  target="_blank" href='http://account.almentor.net/ '>
                    <p className='eLearningOptionPage__text--orange' > account.almentor.net :رابط المنصة</p>
                </a>
                <p> Almentor او تحميل تطبيق</p>
                <p>اسم المستخدم : رقم الموظف الخارجي</p>
                <p>Almentor@123 : كلمة السر</p>
            </p>
        </div>
    )
}

export default ELearning7Almentor;