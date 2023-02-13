// react function component 
// import react
import React from "react";
import NBEButton from "../NBEButton/NBEButton";
import labtob1 from "../../assets/labtob1.png";
import labtob2 from "../../assets/labtob2.png";
import labtob3 from "../../assets/labtob3.png";

import leftArrow from "../../assets/left_arrow.png"; 
import rightArrow from "../../assets/right_arrow.png";

import "./EnglishLearningRoller.css"


function EnglishLearningRoller(props){
    console.log(props.text);
    return (
        <div className="englishLearningRoller">
            <div className='englishLearningRoller__textContainer' > 
                {/** left arrow */} 
                <img src={leftArrow} alt="leftArrow" className='englishLearningRoller__textContainer--leftArrow' />
                {/** right arrow */}
                <img src={rightArrow} alt="rightArrow" className='englishLearningRoller__textContainer--rightArrow' />

                <img class='englishLearningRoller__img' src={props.img} alt="labtob1" />
                <p className='englishLearningRoller__text'>
                  {props.text}
                </p>
            </div>
            <div className='englishLearningRoller__button'>
                <NBEButton text='تسجيل' onClick={()=>{}} marginBottom='0' />
            </div>
            {/** nbe button  تسجيل */}
        </div>   
    )
}

export default EnglishLearningRoller;