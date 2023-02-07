// ELearningModalOption.js

import React, { useState } from 'react';
import closeImg from '../../assets/close.png';

import './ELearningModalOption.css';


function OptionElement(props){
  return (
    <div className='ELearningModalOption__container--option' onClick={props.onClick} >
      <div className='ELearningModalOption__container--option--textContainer'>
        <p>{[props.text]}</p>  
      </div>
    </div>
  )
}


  function ELearningModalOption(props) {
  // State to control the visibility of the inner modal
  const [showELearningModalOption, setShowELearningModalOption] = useState(false);

  // Function to toggle the visibility of the inner modal
  const toggleELearningModalOption = () => {
    setShowELearningModalOption(!showELearningModalOption);
  }

  return (
    <div className='ELearningModalOption'>
      <OptionElement  text={props.text}  onClick={toggleELearningModalOption} />
     
      {showELearningModalOption && (
        <div  className='ELearningModalOption__container'>
          <div className='ELearningModalOption__container--main'>
            <div className='ELearningModalOption__container--closeContainer'>
                <img className='ELearningModalOption__container--close' onClick={toggleELearningModalOption} src={closeImg} alt="close" />
            </div>
            {props.component}
          </div>
        </div>
      )}
    </div>
  );
}

export default ELearningModalOption;
