// react function component 
import React from 'react'

import './ELearningOptionsPages.css';


function ELearningAIHR() {
    return (          
            <div className='eLearningOptionPage__text'> 
                <p className='eLearningOptionPage__text--green eLearningOptionPage--margin-100 eLearningOptionPage--margin-50'>
                    منصة عالمية متخصصة في الموارد توفر برامج تدريبة وشهادات  تخصصية تساعد المتدرب على التميز  في مختلف 
                    مجالات الموارد البشرية بالاضافة الى الاطلاع على احدث المستجدات والاتجاهات العالمية 
                </p>
               
               
                <p className='eLearningOptionPage__text--green ' >
                    <p className='eLearningOptionPage__text--orange  '>طريقة الاشتراك</p>
                    تم اتاحة فرصة الدخول والاطلاع على محتويات المنصة  لموظفي مجموعة الموارد البشرية فقط
                    وسيتم ارسال الدعوة وتفاصيل الدخول للحضور المستهدف على البريد الالكتروني 

                </p>

                
                <a className='eLearningOptionPage__text--orange' href='https://academy.aihr.com/' target="_blank">
                    <p className='eLearningOptionPage__text--orange eLearningOptionPage--margin-50'>  AIHR:رابط المنصة</p>
                </a>
            </div>
    )
}

export default ELearningAIHR;