// react function component 
// import react
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import NBEButton from "../NBEButton/NBEButton";
import {setEnglishLearnIndexSlice} from "../../redux/EnglishLearnIndexSlice";

import leftArrow from "../../assets/left_arrow.png"; 
import rightArrow from "../../assets/right_arrow.png";

import "./EnglishLearningRoller.css"

const  englishLinks = {
    0: 'https://erpprodapp.nbe.ahly.bank:443/OA_HTML/RF.jsp?function_id=22702&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=q-Srf3Agyj0FK3lq_kISgw..&params=Ej.frPRlOzUYbLes7oXO-9J7dcHcFH0j4cwOron20XpOpz74Zp-8WibSthQ280tD2l.2fb8swesWQ.WTNl38nw',
    1: 'https://erpprodapp.nbe.ahly.bank:443/OA_HTML/RF.jsp?function_id=22702&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=q-Srf3Agyj0FK3lq_kISgw..&params=OqjSGzA8P3JNGp0s5Y5p97vX0TniFkuUEz5CJQoNf8ROpz74Zp-8WibSthQ280tD2l.2fb8swesWQ.WTNl38nw',
    2: 'https://erpprodapp.nbe.ahly.bank:443/OA_HTML/RF.jsp?function_id=22702&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=q-Srf3Agyj0FK3lq_kISgw..&params=zRFQRbBycZ.qJn6MjdsvTHwrCqmoqEZgoNIo2AHnmhFOpz74Zp-8WibSthQ280tD2l.2fb8swesWQ.WTNl38nw'
}

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
                <NBEButton text='تسجيل' onClick={()=>{window.open(englishLinks[englishLearnIndex], '_blank')}} marginBottom='0' />
            </div>
            {/** nbe button  تسجيل */}
        </div>   
    )
}

export default EnglishLearningRoller;