// RegisterCompletedElement functiom component 
import React from 'react';

import './RegisterCompletedElement.css';

// import  completed1.png from '../../assets/images/checked.png'; 
import completed1 from '../../assets/completed.png';
/*registerCompletedElement had 2 divs one for image  and other for text  */
function RegisterCompletedElement(props) {
    return (
        <div className="registerCompletedElement">

            <div className="registerCompletedElement__container">
                <div className='registerCompletedElement__container2'>
                    <img className="registerCompletedElement__container--image" src={props.img} alt="completed"/>
                </div>

                <div className="registerCompletedElement__text">
                    <p className='registerCompletedElement__text--hover' >{props.hoverText}</p>
                    <p className='registerCompletedElement__text--main'>{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default RegisterCompletedElement;