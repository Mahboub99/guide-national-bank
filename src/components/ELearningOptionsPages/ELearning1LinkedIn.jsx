// react function component 
import React from 'react'

import './ELearningOptionsPages.css';


function ELearningLinkedIn() {
    return (          
            <div className='eLearningOptionPage__text'> 
                <p className='eLearningOptionPage__text--green eLearningOptionPage--margin-100'>منصة تعليمية عبر الإنترنت تساعدك على اكتشاف وتطوير المهارات الشخصية
                    والفنية والتكنولوجية والإبداعية من خلال دورات تدريبية يقدمها خبراء في تلك
                    المجالات.  <span className='eLearningOptionPage__text--orange'>مع أكثر من 15000 دورة تدريبية وتوصية مخصصة،</span> يمكنك اكتشاف
                    الدورات التدريبية المتعلقة بمجال عملك واهتماماتك وإكمالها وتتبعها يمكننك التسجيل  من خلال
                </p>
                <p>
                    <a className='eLearningOptionPage__text--orange' href='https://www.linkedin.com/learning ' target="_blank">
                        <span className='eLearningOptionPage__text--orange'>  ELearningLinkedIn:الرابط التالي</span>
                    </a>
                </p>
                <p className="eLearningOptionPage__text--green eLearningOptionPage--margin-50">
                ستكون المنصة متاحة لعدد محدود من العاملين وفقا وأولوية التسجيل واستيفاء موافقة المدير المباشر والمستوى الإداري الأعلى على نظام الاوراكل من خلال الرابط التالي LinkedIn Registration
                </p>

                <p style={{direction: "rtl"}} className='eLearningOptionPage__text--orange eLearningOptionPage--margin-50'>سيتم ارسال تعليمات و طريقة الدخول للزملاء المسجلين تباعا</p>
            </div>
    )
}

export default ELearningLinkedIn;