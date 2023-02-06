// GuideModal.js

import React, { useState } from 'react';
import GuideModalOption from '../GuideModalOption/GuideModalOption';
import leftIMage from '../../assets/25Sana.png' 
// import close img from '../../assets/close.png'
import closeImg from '../../assets/close.png' 

import './GuideModal.css';

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
            <GuideModalOption />
            <GuideModalOption />
            <GuideModalOption />
          </div>  
        </div>
      )}
    </div>
  );
}

export default GuideModal;
