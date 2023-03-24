/** SideBar function component */

import React , { useState } from 'react';
import GuideModalOption from '../GuideModalOption/GuideModalOption';
import { Link } from 'react-router-dom';

import ELearning from '../ELearning/ELearning';
import EnglishLearning from '../EnglishLearning/EnglishLearning';
import GeneralInstructions from '../GeneralInstructions/GeneralInstructions';

import guideOptionImg2 from '../../assets/guideOptionImg2.png';
import guideOptionImg3 from '../../assets/guideOptionImg3.png';
import guideOptionImg1 from '../../assets/guideOptionImg1.png';
import guideOptionImg4 from '../../assets/guideOptionImg4.png';
import homeImg from '../../assets/home.png';


import './SideBar.css';

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

// function OptionElement(props){
//     return (
//       <div className='guideModalOption__container--option' onClick={props.onClick} >
        
//         <div className='guideModalOption__container--option--imgContainer'>
//           <img className='guideModalOption__container--option--img' src={props.icon} alt="guideOptionImg1" />
//         </div>
//         <div className='guideModalOption__container--option--textContainer'>
//           <p>{[props.text]}</p>  
//         </div>
//       </div>
//     )
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
  
  
function SideBar() {
    return (
        <div className="sideBar">
            <OptionElement icon={homeImg} text={'الرئيسية'} onClick={()=> window.location = "/"} />
            {options.map((option, index) => (
              <GuideModalOption key={index} optionElement={option.component} icon={option.icon} text={option.text} />
            ))}
            <OptionElement icon={guideOptionImg4} text={'أسال الموارد البشرية'} onClick={() => window.open('https://erpprodapp.nbe.ahly.bank/OA_HTML/RF.jsp?function_id=58839&resp_id=54511&resp_appl_id=20003&security_group_id=0&lang_code=US&oas=3qK7onxBYZLGfXfK48-HSg..&params=K-xkr2e9llnvvFYS3ovQLJYaT-jJgNEerbgvch1BfGY ', '_blank')} />

        </div>
    );
}

export default SideBar;