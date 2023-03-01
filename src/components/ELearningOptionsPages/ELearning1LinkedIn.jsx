// react function component 
import React from 'react'

import './ELearningOptionsPages.css';


function ELearningLinkedIn() {
    return (          
            <div className='eLearningOptionPage__text'> 
                <p className='eLearningOptionPage__text--green eLearningOptionPage--margin-100'>منصة تعليمية عبر الإنترنت تساعدك على اكتشاف وتطوير المهارات الشخصية
                    والفنية والتكنولوجية والإبداعية من خلال دورات تدريبية يقدمها خبراء في تلك
                    المجالات.  <span className='eLearningOptionPage__text--orange'>مع أكثر من 15000 دورة تدريبية وتوصية مخصصة،</span> يمكنك اكتشاف
                    الدورات التدريبية المتعلقة بمجال عملك واهتماماتك وإكمالها وتتبعها
                </p>
                <p className='eLearningOptionPage__text--green eLearningOptionPage--margin-50' >
                    هذه المسارات متاحة فقط للعاملين الجدد (مصرفي ب - مصرفي أ) وبحد
                    أقصي ثلاث سنوات من سنة التعيين
                </p>
                <p className='eLearningOptionPage__text--orange eLearningOptionPage--margin-50'>وتم ارسال رابط التفعيل للحضور المستهدف</p>
            </div>
    )
}

export default ELearningLinkedIn;