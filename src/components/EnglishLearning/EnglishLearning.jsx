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
        text: 'هو برنامج يتكون من فصول دراسية إلكترونية عبر الإنترنت بالإضافة إلى تعليم إلكتروني تفاعلي لتنمية مهارات اللغة الإنجليزية في بيئة العمل وفقاً للنموذج الأوروبي الموحد CEFR'
    },
    {
        img: labtob2,
        text: 'هو برنامج يتكون من فصول دراسية إلكترونية عبر الإنترنت بالإضافة إلى تعليم إلكتروني تفاعلي لتنمية مهارات اللغة الإنجليزية في بيئة العمل بالتعاون مع Cambridge'
    },
    {
        img: labtob3,
        text: 'برنامج بنظام الفصول الدراسية الأونلاين بالتعاون مع معهد أميديست وهو برنامج لتنمية مهارات اللغة الإنجليزية English General يتكون من ١٦ مستوى دراسي' 
    }
]


function EnglishLearning() {
    const englishLearnIndex = useSelector(state => state.englishLearnIndex.value);
    return (
        <div className='englishLearning'>
            <div className="englishLearning__textContainer">
                <p>
                    استمراراً لسعي مجموعة الموارد البشرية لإتاحة فرص التطوير الذاتي؛ ونظراً لاعتبار اللغة
                    الإنجليزية أمر حيوي في جوانب الحياة المختلفة (الشخصية والعملية)، نعلن عن استمرار
                    فتح باب التسجيل على برامج تطوير اللغة الإنجليزية
                </p>
            </div>
            
            <EnglishLearningModalButton text='التعرف على البرامج' component={<EnglishLearningRoller img={englishLearningRollerPages[englishLearnIndex].img} text={englishLearningRollerPages[englishLearnIndex].text}/>} />
        </div>
    )
}

export default EnglishLearning;
