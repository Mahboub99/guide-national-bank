// react function component ELearningOptionPage

import React from 'react';


import './ELearningOptionsPages.css';

function ELearningOptionPage(props) {
    return (
        <div className='eLearningOptionPage'>
            <div className='eLearningOptionPage__img' >
                <img className='eLearningOptionPage__img--phone' src={props.img} alt="phone" />
            </div> 
           {props.textComponent}
        </div>
    )
}

export default ELearningOptionPage;


