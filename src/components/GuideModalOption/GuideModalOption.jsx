// GuideModalOption.js

import React, { useState } from 'react';
import './GuideModalOption.css';

function GuideModalOption() {
  // State to control the visibility of the inner modal
  const [showGuideModalOption, setShowGuideModalOption] = useState(false);

  // Function to toggle the visibility of the inner modal
  const toggleGuideModalOption = () => {
    setShowGuideModalOption(!showGuideModalOption);
  }

  return (
    <div>
      
      <button id="open-inner-modal-btn" onClick={toggleGuideModalOption}>Open Inner Modal</button>
      {showGuideModalOption && (
        <div id="inner-modal-container">
          <span id="close-inner-modal" onClick={toggleGuideModalOption}>&times;</span>
          <p>Inner Modal Content</p>
        </div>
      )}
    </div>
  );
}

export default GuideModalOption;
