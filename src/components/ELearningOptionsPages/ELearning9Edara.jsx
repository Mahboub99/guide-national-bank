import React from 'react';

import './ELearningOptionsPages.css';

function ELearning9Edara() {
    return (
        <div className='eLearningOptionPage__text'>
            <p className='eLearningOptionPage__text--green eLearningOptionPage--margin-100'>
                كتب وملخصات <span className='eLearningOptionPage__text--orange' > مقروءة ومسموعة</span> في مختلف المجالات الإدارية باللغة العربية   
            </p>
            <p className='eLearningOptionPage__text--green eLearningOptionPage--margin-50'>
                <p>edara.com خطوات الدخول علي منصة  </p>
                <p>  
                    <span className='eLearningOptionPage__text--orange' > تطبيق Staff NBE </span>  
                    الدخول من خلال 
                </p>
                <span> 
                    و اتباع الخطوات المذكورة
                </span>
                <p>
                    <a className='eLearningOptionPage__text--orange'  target="_blank" href='https://edara.com/ '>
                        <span className='eLearningOptionPage__text--orange' >  edara.com منصة 
                            <span className='eLearning--hide'>a</span> 
                        </span> 
                    </a>
                    تحميل تطبيق 
                </p>
                <p>  NBE : الكود المؤسسي</p>
                <p>اسم المستخدم : رقم الموظف الخارجي</p>
                <p>edara123 : كلمة المرور  </p>
            </p>
        </div>
    )
}

export default ELearning9Edara;