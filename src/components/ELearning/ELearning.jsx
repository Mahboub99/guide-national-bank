import React from 'react';
import eLearningMainImg from '../../assets/eLearningMain.png';

import ELearningModalOption from '../ELearningModalOption/ELearningModalOption';
import ELearningOptionPage from '../ELearningOptionsPages/ELearningOptionPage';

import ELearning1LinkedIn from '../ELearningOptionsPages/ELearning1LinkedIn';
import ELearning2Harvard from '../ELearningOptionsPages/ELearning2Harvard';
import ELearning3Coursera from '../ELearningOptionsPages/ELearning3Coursera';
import ELearning4Moody from '../ELearningOptionsPages/ELearning4Moody';
import ELearning5VideoArts from '../ELearningOptionsPages/ELearning5VedioArts';
import ELearning6Pluralsight from '../ELearningOptionsPages/ELearning6Pluralsight';
import ELearning7Almentor from '../ELearningOptionsPages/ELearning7Almentor';
import ELearning8EKB from '../ELearningOptionsPages/ELearning8EKB';
import ELearning9Edara from '../ELearningOptionsPages/ELearning9Edara';


import PhoneImg1 from '../../assets/phone1.png';
import PhoneImg2 from '../../assets/phone2.png';
import PhoneImg3 from '../../assets/phone3.png';
import PhoneImg4 from '../../assets/phone4.png';
import PhoneImg5 from '../../assets/phone5.png';
import PhoneImg6 from '../../assets/phone6.png';
import PhoneImg7 from '../../assets/phone7.png';
import PhoneImg8 from '../../assets/phone8.png';
import PhoneImg9 from '../../assets/phone9.png';


import './ELearning.css';

// array of objects of 2 elements text and component
const options = [
    {
        text: 'LinkedIn',
        component: <ELearningOptionPage img={PhoneImg1}  textComponent={<ELearning1LinkedIn/>} />
    },
    {
        text: 'Harvard BR',
        component: <ELearningOptionPage img={PhoneImg2} textComponent={<ELearning2Harvard/>} />
    },
    {
        text: 'Coursera',
        component: <ELearningOptionPage img={PhoneImg3} textComponent={<ELearning3Coursera/>} />
    },
    {
        text: "Moody's",
        component: <ELearningOptionPage img={PhoneImg4} textComponent={<ELearning4Moody/>} />
    },
    {
        text: 'VidoeArts',
        component: <ELearningOptionPage img={PhoneImg5} textComponent={<ELearning5VideoArts/>} />
    },
    {
        text: 'Pluralsight',
        component: <ELearningOptionPage img={PhoneImg6} textComponent={<ELearning6Pluralsight/>} />
    },
    {
        text: 'Almentor',
        component: <ELearningOptionPage img={PhoneImg7} textComponent={<ELearning7Almentor/>} />
    },
    {
        text: 'EKB',
        component: <ELearningOptionPage img={PhoneImg8} textComponent={<ELearning8EKB/>} />
    },
    {
        text: 'Edara.com',
        component: <ELearningOptionPage img={PhoneImg9} textComponent={<ELearning9Edara/>} />
    }
];

function ELearning() {
    return (
        <div className='eLearning'>
            <div className='eLearning__options'>
                {options.map((option, index) => (
                    <ELearningModalOption key={index} text={option.text} component={option.component} />
                ))}
            </div>
            <div className='eLearning__img'>
                <div className='eLearningMainImg__container'>
                    <img className='eLearningMainImg' src={eLearningMainImg} alt="eLearningMainImg" />
                </div>
            </div>
        
            
        </div>
    );
}

export default ELearning;

