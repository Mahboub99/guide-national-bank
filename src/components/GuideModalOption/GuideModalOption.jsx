// GuideModalOption.js

import React, { useState } from 'react';
import closeImg from '../../assets/close.png';

import './GuideModalOption.css';


// function OptionElement(props){
//   return (
//     <div className='guideModalOption__container--option' onClick={props.onClick} >
      
//       <div className='guideModalOption__container--option--imgContainer'>
//         <img className='guideModalOption__container--option--img' src={props.icon} alt="guideOptionImg1" />
//       </div>
//       <div className='guideModalOption__container--option--textContainer'>
//         <p>{[props.text]}</p>  
//       </div>
//     </div>
//   )
// }

function OptionElement(props){
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <div className='guideModalOption__container--outer'>
      <div className='guideModalOption__container--circle' onClick={props.onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          <img className='guideModalOption__container--circle--img' src={props.icon} alt="guideOptionImg1" />
      </div>
      
      {hover && <div className='sideBar_tooltip'>
          {props.text}       
      </div>} 
    </div>
  )
}


  function GuideModalOption(props) {
  // State to control the visibility of the inner modal
  const [showGuideModalOption, setShowGuideModalOption] = useState(false);

  // Function to toggle the visibility of the inner modal
  const toggleGuideModalOption = () => {
    setShowGuideModalOption(!showGuideModalOption);
  }

  return (
    <div className='guideModalOption'>
      <OptionElement  text={props.text} icon={props.icon}  onClick={toggleGuideModalOption} />
     
      {showGuideModalOption && (
        <div  className='guideModalOption__container'>
          <div className='guideModalOption__container--main'>
            <div className='guideModalOption__container--closeContainer'>
                <img className='guideModalOption__container--close' onClick={toggleGuideModalOption} src={closeImg} alt="close" />
            </div>
            {props.optionElement}
          </div>
        </div>
      )}
    </div>
  );
}

export default GuideModalOption;
