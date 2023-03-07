// function GeneralInstructions component

import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setGeneralInstructionsIndexSlice } from "../../redux/generalInstructionsIndexSlice";

import leftArrow from "../../assets/left_arrow.png"; 
import rightArrow from "../../assets/right_arrow.png";

import './GeneralInstructions.css';

// optons array of objects of title and text array of strings
const options = [
    {
        title: 'ضوابط عامة',
        text: [
            'تحتوي الخطة التدريبية علي برامج أساسية (المسارات التدريبية المختلفة لكل مجموعة/قطاع/إدارة) وبرامج للتسجيل الذاتي (من خلال المنصات الالكترونية) وبرامج اخري مثال برامج اللغة الإنجليزية و الحاسب الالي.',
            'يتم التسجيل من جانب الزملاء ببرامج التسجيل الذاتي المتاحة والواردة بإعلان الخطة التدريبية السنوية ويراعى اختيار البرامج ذات الأولوية والمرتبطة بمجال العمل.',
            'ضرورة مراجعة صفحة التعلم بالصفحة الرئيسية علي Staff NBE بشكل دوري او علي نظام الاوراكل للاطلاع على كافة تفاصيل البرامج المتاحة والتي تم الحاقكم بها خلال الخطة التدريبية السنوية.',
            'يتيح نظام اوراكل للمدير المباشر الاطلاع على البرامج الخاصة بالزملاء تحت اشرافه خطوات الاطلاع.'
        ]
    },
    {
        title: 'قواعد ومحددات الاعتذارات / التعديلات / التبديلات ',
        text: [
            'يجب الالتزام بالموعد المسموح به لطلب الاعتذار / التعديل / التبديل والوارد بإعلان الخطة التدريبية السنوية.',
            'يجب الرجوع لجهاز المنطقة / الشئون الإدارية للقطاع لتقديم طلب الاعتذار / التعديل / التبديل وذلك لإخطار قطاع المعرفة والتطوير بصورة مجمعة لطلبات الاعتذار / التعديل / التبديل حيث لا يعتد بالطلبات الفردية التي ترد لقطاع المعرفة والتطوير.',
            'في حالة الاعتذارات / التعديلات / التبديلات الطارئة اثناء تنفيذ الخطة التدريبية السنوية يجب اخطار قطاع المعرفة والتطوير بها قبل بدأ انعقاد البرنامج التدريبي بخمسة أيام عمل على الأقل.'
        ]
    },
    {
        title:'شروط قبول الاعتذارات / التعديلات / التبديلات الطارئة',
        text: [
            'وجود اعمال طارئة استثنائية استوجبت وجود الزملاء بمقر العمل على ان يكون التعزيز بأهمية تلك الاعمال لرئيس المنطقة / القطاع مثال: وجود زيارات التفتيش او التدقيق الداخلي او المراجعة الداخلية.',
            'حدوث حالات مرضية ويكون طلب الاعتذار / التعديل / التبديل معزز بتقرير طبي معتمد من القطاع الطبي في حالة صدوره من جهات خارج الهيئات الطبية المتعاقد معها مصرفنا.'
        ]
    },
    {
        title:'مسئوليات الزميل',
        text:[
            'اتباع السياسات والاجراءات والنظم التي يحددها البنك لتنمية وتطوير مهاراته وخبراته مهنيا وثقافيا او لتأهيله للقيام بعمل يتفق مع التطور التقني او الاستراتيجي فى البنك.',
            'في حالة التغيب عن البرنامج التدريبي بدون عذر او الالتزام بشروط وقواعد الاعتذارات / التعديلات / التبديلات سيتم تحميل الزميل بإجمالي التكاليف الفعلية للتدريب.',
            'بذل الجهد للاستفادة من البرنامج من خلال: التثقيف الذاتي بخصوص الموضوع الذي سيحضره وتحضير الأسئلة مسبقاً، وتجنب أي شيء قد يعوق متابعته أثناء الحضور (المكالمات الهاتفية، ورسائل البريد الإلكتروني، ... وما إلى ذلك) .',
            'استخدام المادة العلمية كمرجع بعد إتمام البرنامج.'
        ]
    },
    {
        title: 'مسئوليات الزميل',
        text:[
            'الالتزام بمواعيد الحضور والانصراف واتباع الاجراءات والنظم الداخلية بالبنك.',
            'الالتزام بميثاق سلوكيات العاملين الخاص بالبنك ولائحة العاملين (والمتاحة للاطلاع علي الموقع الداخلي مصرفنا) مثل الالتزام بالسلوك والمظهر اللائق واتباع تعليمات السلامة والصحة المهنية وحماية البيئة واجراءات الامن اثناء تواجده بمواقع التدريب او التدريب بنظام التعليم عن بعد.',
            'إحاطة المادة العلمية للبرنامج بالسرية التامة وعدم الكشف عنها امام الأطراف الخارجية.',
            'حضور جميع الاختبارات والمقابلات الخاصة بالالتحاق بالبرنامج، والاختبارات البينية والنهائية ان وجدت.',
            'استيفاء التقييمات الخاصة بالبرامج التدريبية على نظام الاوراكل فور الانتهاء من البرامج حيث انها جزء أساسي من إتمام الحضور.'
        ]
    },
    {
        title: 'مسئوليات المدير المباشر',
        text:[
            'تحديد احتياجات التدريب والتطوير لكل زميل بالإدارة/الفرع مع اعتماد الطلبات المقدمة من العاملين نطاق إشرافه اعتمادا علي معايير متعددة منها قياس الاداء.',
            'التأكد من ابلاغ العاملين بمواعيد الدورات المسجلة على نظام الاوراكل وفي حالة عدم إبلاغ المرشحين بمواعيد الحضور يتم تحميل إجمالي التكلفة للمسؤول الموكل من قبل رئيس المجموعة / القطاع/ المنطقة بالإبلاغ.',
            'مناقشة أهداف ومحتويات البرنامج مع العامل المرشح لحضوره لضمان فعالية الاستفادة من التدريب.',
            'موافاة قطاع المعرفة والتطوير بالتعزيزات في حالة الالغاءات / الاعتذارات / التعديلات / التبديلات لأي من البرامج التدريبية.',
            'مناقشة الزميل بشكل دوري حول مدى التطوير والاستفادة الذي حصل عليهما.',
            'متابعة مدي استفادة العاملين المشاركين فى البرامج التدريبية وضمان مشاركة ما اكتسبوه من معلومات ومهارات لباقي الزملاء، ومتابعة تنفيذ خطط العمل ان وجدت.'
        ]
    },
    {
        title: 'بدلات السفر ومصاريف الإقامة للزملاء الوافدين من فروع الأقاليم',
        text:[
            'في حالة استحقاق الزميل لبدلات سفر نظير حضور برنامج تدريبي يقوم الزميل بتقديم طلب صرف بدل السفر المستحق على نظام Expense-I من خلال نظام اوراكل.',
            'في حالة رغبة الزميل الوافد من فروع الأقاليم توفير إقامة يتم الحجز بمعرفته بدار البنك الأهلي المصري ويسمح له بالإقامة من اليوم السابق لتاريخ بداية البرنامج التدريبي، وفى حالة تعذر الإقامة بدار البنك يتم الرجوع الى القطاع المختص (إدارة الحجوزات) لمعرفة الفنادق المتعاقد معها مصرفنا في نطاق مكان التدريب.',
            'في حالة حضور برنامج تدريبي يتخلله عطلات رسمية او سنوية لا يتحمل البنك مصاريف الإقامة او بدلات السفر عن تلك العطلات سوي للحاصلين علي تعزيز من رئيس المنطقة/القطاع ببعد المسافة عن مقر العمل والتي تتطلب عدم العودة سوي بعد انتهاء البرنامج.'
        ]
    },
    {
        title:'التزامات السداد',
        text:[
            'يتحمل البنك رسوم البرامج التدريبية التي ألحق بها العامل وتم اجتيازها سواء بنسبة الحضور او بالاختبارات.',
            'في حالة اخلال الزميل بأي من بنود سياسة المعرفة والتطوير او اجراءات العمل المنظمة لها سيتم تحميله بإجمالي التكلفة التي تحملها البنك، مع اتخاذ الاجراءات اللازمة في هذا الشأن.',
            'في حالة الاستقالة / ترك الخدمة يلتزم الزميل بسداد كامل القيمة وفقا لمحددات سياسة قطاع المعرفة والتطوير.'
        ]
    }
]


function GeneralInstructionsContainer() {  
    const generalInstructionsIndex = useSelector(state => state.generalInstructionsIndex.value);     
    const dispatch = useDispatch();
    // increase index
    const increaseIndex = () => {
        if(generalInstructionsIndex < options.length - 1) {
                
            dispatch(setGeneralInstructionsIndexSlice(generalInstructionsIndex + 1));
        }
    }
    // decrease index
    const decreaseIndex = () => {
        if(generalInstructionsIndex > 0) {
            dispatch(setGeneralInstructionsIndexSlice(generalInstructionsIndex - 1));
        }
    }

    return (
        <div className='generalInstructionsContainer'>
           <p className="generalInstructionsContainer__title">{options[generalInstructionsIndex].title}</p>
           <div className="generalInstructionsContainer__outerContainer" >
                {generalInstructionsIndex > 0 && <img src={leftArrow} alt="leftArrow" className='generalInstructionsContainer__outerContainer--leftArrow' onClick={decreaseIndex} />}
                {generalInstructionsIndex < options.length-1 && <img src={rightArrow} alt="rightArrow" className='generalInstructionsContainer__outerContainer--rightArrow' onClick={increaseIndex} />}
                <div className="generalInstructionsContainer__innerContainer">
                    {/*make a list ul right direction arabic text*/}

                    <ul className="generalInstructionsContainer__list" dir='rtl' >
                        {options[generalInstructionsIndex].text.map((item, index) => {
                            return <li key={index} className="generalInstructionsContainer__listItem">{item}</li>
                        })}
                    </ul>
                </div>

           </div>
            {/*make the active dot orange*/}
            <div className="generalInstructions__dotsContainer">
                {options.map((item, index) => {
                    return <div key={index} className={generalInstructionsIndex === index ? "generalInstructions__dotsContainer--dot generalInstructions__dotsContainer--dot-active" : "generalInstructions__dotsContainer--dot"}></div>
                })}
            </div>

           {/* <div className="generalInstructions__dotsContainer">
                {options.map((item, index) => {
                    return <div key={index} className="generalInstructions__dotsContainer--dot"></div>
                })}
            </div> */}
        </div>
    )   
}


function GeneralInstructions() {
    return (
        <div className='generalInstructions'>
            <GeneralInstructionsContainer />
        </div>
    )
}


export default GeneralInstructions;