import React from 'react';
import eLearningMainImg from '../../assets/eLearningMain.png';
import ELearningModalOption from '../ELearningModalOption/ELearningModalOption';
import ELearningOptionPage from '../ELearningOptionsPages/ELearningOptionPage';


import './ELearning.css';

// array of objects of 2 elements text and component
const options = [
    {
        text: 'LinkedIn',
        component: <ELearningOptionPage />
    },
    {
        text: 'Harvard BR',
        component: <ELearningOptionPage />
    },
    {
        text: 'Coursera',
        component: <ELearningOptionPage />
    },
    {
        text: "Moody's",
        component: <ELearningOptionPage />
    },
    {
        text: 'VidoeArts',
        component: <ELearningOptionPage />
    },
    {
        text: 'Pluralsight',
        component: <ELearningOptionPage />
    },
    {
        text: 'Almentor',
        component: <ELearningOptionPage />
    },
    {
        text: 'EKB',
        component: <ELearningOptionPage />
    },
    {
        text: 'Edara.com',
        component: <ELearningOptionPage />
    }
];
    

function OptionElement(){
  return (
    <div className='guideModalOption__container--option'>
      <p>Option 1</p>
    </div>
  )
}

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

