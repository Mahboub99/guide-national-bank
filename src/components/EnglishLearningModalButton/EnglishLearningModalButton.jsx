// EnglishLearningModalButton.js

import React, { useState } from 'react';
import closeImg from '../../assets/close.png';
import NBEButton from '../NBEButton/NBEButton';

import './EnglishLearningModalButton.css';


function OptionElement(props){
  return (
    <div className='EnglishLearningModalButton__container--option' onClick={props.onClick} >
      <div className='EnglishLearningModalButton__container--option--textContainer'>
        <p>{[props.text]}</p>  
      </div>
    </div>
  )
}


  function EnglishLearningModalButton(props) {
  // State to control the visibility of the inner modal
  const [showEnglishLearningModalButton, setShowEnglishLearningModalButton] = useState(false);

  // Function to toggle the visibility of the inner modal
  const toggleEnglishLearningModalButton = () => {
    setShowEnglishLearningModalButton(!showEnglishLearningModalButton);
  }

  return (
    <div className='EnglishLearningModalButton'>
      <NBEButton text={props.text} onClick={toggleEnglishLearningModalButton} marginBottom="0" />

     
      {showEnglishLearningModalButton && (
        <div  className='EnglishLearningModalButton__container'>
          <div className='EnglishLearningModalButton__container--main'>
            <div className='EnglishLearningModalButton__container--closeContainer'>
                <img className='EnglishLearningModalButton__container--close' onClick={toggleEnglishLearningModalButton} src={closeImg} alt="close" />
            </div>
            {props.component}
          </div>
        </div>
      )}
    </div>
  );
}

export default EnglishLearningModalButton;
