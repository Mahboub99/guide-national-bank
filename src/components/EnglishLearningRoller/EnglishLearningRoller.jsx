// react function component 
// import react
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import NBEButton from "../NBEButton/NBEButton";
import {setEnglishLearnIndexSlice} from "../../redux/EnglishLearnIndexSlice";

import leftArrow from "../../assets/left_arrow.png"; 
import rightArrow from "../../assets/right_arrow.png";

import "./EnglishLearningRoller.css"


function EnglishLearningRoller(props){
    const englishLearnIndex = useSelector(state => state.englishLearnIndex.value);
    const dispatch = useDispatch();

    // increase the index of the english learning roller
    const increaseEnglishLearnIndex = () => {
        if(englishLearnIndex < 2){
            dispatch(setEnglishLearnIndexSlice(englishLearnIndex + 1));
        }
    }
    // decrease the index of the english learning roller
    const decreaseEnglishLearnIndex = () => {
        if(englishLearnIndex > 0){
            dispatch(setEnglishLearnIndexSlice(englishLearnIndex - 1));
        }
    }

    console.log(props.text);
    return (
        <div className="englishLearningRoller">
            <div className='englishLearningRoller__textContainer' > 
                {/** left arrow */} 
                {englishLearnIndex > 0 && <img src={leftArrow} alt="leftArrow" className='englishLearningRoller__textContainer--leftArrow' onClick={decreaseEnglishLearnIndex} />}
                {/** right arrow */}
                {englishLearnIndex < 2 && <img src={rightArrow} alt="rightArrow" className='englishLearningRoller__textContainer--rightArrow' onClick={increaseEnglishLearnIndex} />}

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