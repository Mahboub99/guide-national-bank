// GuideModal.js

import React, { useState } from 'react';
import GuideModalOption from '../GuideModalOption/GuideModalOption';
import ELearning from '../ELearning/ELearning';

import leftIMage from '../../assets/25Sana.png' 
import closeImg from '../../assets/close.png' 
import guideOptionImg1 from '../../assets/guideOptionImg1.png'
import guideOptionImg2 from '../../assets/guideOptionImg2.png'
import guideOptionImg3 from '../../assets/guideOptionImg3.png'
import guideOptionImg4 from '../../assets/guideOptionImg4.png'

import './GuideModal.css';

// array of objects of 3 elements text icon and component
const options = [
  {
    text: 'منصات التعلم الرقمي',
    icon: guideOptionImg1,
    component: <ELearning />
  },
  {
    text: 'تطوير مهارات اللغة الانجليزية',
    icon: guideOptionImg2,
    component: <OptionElement />
  },
  {
    text: 'ضوابط عامة',
    icon: guideOptionImg3,
    component: <OptionElement />
  },
  {
    text: 'أسال الموارد البشرية',
    icon: guideOptionImg4,
    component: <OptionElement />
  }
]

function OptionElement(){
  return (
    <div className='guideModalOption__container--option'>
      <p>Option 1</p>
    </div>
  )
}

function GuideModal() {
  // State to control the visibility of the outer modal
  const [showGuideModal, setShowGuideModal] = useState(false);

  // Function to toggle the visibility of the outer modal
  const toggleGuideModal = () => {
    setShowGuideModal(!showGuideModal);
  }

  return (
    <div className='guideModal'>
        <img id="open-outer-modal-btn" className='GuideModal__img' onClick={toggleGuideModal}  src={leftIMage} alt="25sana" />
      {showGuideModal && (
        <div className="guideModal__container">
          <div className="guideModal__container--main">
            <div className='guideModal__container--closeContainer'>
                <img className='guideModal__container--close' onClick={toggleGuideModal} src={closeImg} alt="close" />
                {/* <span className="close-outer-modal" onClick={toggleGuideModal}>&times;</span> */}
            </div>
            {/* pass OptionElement to GuideModalOption as a component icon text */}
            {options.map((option, index) => (
              <GuideModalOption key={index} optionElement={option.component} icon={option.icon} text={option.text} />
            ))}
          </div>  
        </div>
      )}
    </div>
  );
}

export default GuideModal;
