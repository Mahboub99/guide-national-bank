// GuideModal.js

import React, { useState } from 'react';
import GuideModalOption from '../GuideModalOption/GuideModalOption';

import ELearning from '../ELearning/ELearning';
import EnglishLearning from '../EnglishLearning/EnglishLearning';
import GeneralInstructions from '../GeneralInstructions/GeneralInstructions';

import leftIMage from '../../assets/footerNav.png' 
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
    component: <EnglishLearning />
  },
  {
    text: 'ضوابط عامة',
    icon: guideOptionImg3,
    component: <GeneralInstructions />
  }
];


function OptionElement(props){
  return (
    <div className='guideModalOption__container--option' onClick={props.onClick} >
      
      <div className='guideModalOption__container--option--imgContainer'>
        <img className='guideModalOption__container--option--img' src={props.icon} alt="guideOptionImg1" />
      </div>
      <div className='guideModalOption__container--option--textContainer'>
        <p>{[props.text]}</p>  
      </div>
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
            
            <OptionElement icon={guideOptionImg4} text={'أسال الموارد البشرية'} onClick={() => window.open('https://erpprodapp.nbe.ahly.bank/OA_HTML/RF.jsp?function_id=58839&resp_id=54511&resp_appl_id=20003&security_group_id=0&lang_code=US&oas=3qK7onxBYZLGfXfK48-HSg..&params=K-xkr2e9llnvvFYS3ovQLJYaT-jJgNEerbgvch1BfGY ', '_blank')} />
          </div>  
        </div>
      )}
    </div>
  );
}

export default GuideModal;
