// function component EnglishLearning

import React from 'react';
import EnglishLearningModalButton from '../EnglishLearningModalButton/EnglishLearningModalButton';
import EnglishLearningRoller from '../EnglishLearningRoller/EnglishLearningRoller';
import { useDispatch ,useSelector  } from 'react-redux';

import labtob1 from "../../assets/labtob1.png";
import labtob2 from "../../assets/labtob2.png";
import labtob3 from "../../assets/labtob3.png";

import './EnglishLearning.css';

const englishLearningRollerPages = [
    {
        img: labtob1,
        text: 'هو برنامج تعليم إلكتروني تفاعلي لتنمية مهارات اللغة الإنجليزية في بيئة العمل و يتكون من مستويات متدرجة  وفقاً للنموذج الأوروبي الموحد CEFR'
    },
    // {
    //     img: labtob2,
    //     text: 'هو برنامج يتكون من فصول دراسية إلكترونية عبر الإنترنت بالإضافة إلى تعليم إلكتروني تفاعلي لتنمية مهارات اللغة الإنجليزية في بيئة العمل بالتعاون مع Cambridge'
    // },
    {
        img: labtob3,
        text: 'برنامج بنظام الفصول الدراسية/ التعلم عن بعد  بالتعاون مع معهد أميديست وهو برنامج لتنمية مهارات اللغة الإنجليزية  يتكون من مستويات متدرجة  وفقاً للنموذج الأوروبي الموحد CEFR' 
    }
]


function EnglishLearning() {
    const englishLearnIndex = useSelector(state => state.englishLearnIndex.value);
    return (
        <div className='englishLearning'>
            <div className="englishLearning__textContainer">
                <p>
                أستمراراً لسعي مجموعة الموارد البشرية لإتاحة فرص التطوير الذاتي؛ ونظراً لاعتبار اللغة الإنجليزية أمر حيوي في جوانب الحياة المختلفة (الشخصية والعملية) وحرصا على تطويرك و تنمية مهاراتك  من خلال تلبية الاحتياجات التدريبية المختلفة، نحيط سيادتكم علما انه تم فتح باب استقبال طلبات التسجيل الجديدة  للالتحاق ببرامج
                تطوير مهارات اللغة الانجليزية المقرر انعقادها بالتعاون مع مقدمي الخدمة الموضحين ادناه لكافة الزملاء على مستوى البنك, وذلك بعد التأكد من توفير كافة المتطلبات اللازمة و الجودة المقدمة و التي تحقق لك تجربة تعلم مميزة و غنية ضمن حزمة البرامج التي يوفرها قطاع المعرفة و التطوير من خلال المسارات التدريبية.
                </p>
            </div>
            
            <EnglishLearningModalButton text='التعرف على البرامج' component={<EnglishLearningRoller img={englishLearningRollerPages[englishLearnIndex].img} text={englishLearningRollerPages[englishLearnIndex].text}/>} />
        </div>
    )
}

export default EnglishLearning;
