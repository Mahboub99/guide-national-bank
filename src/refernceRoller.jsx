import React, { useState, useEffect } from 'react';

const Roller = ({ components }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleRoll = () => {
    setCurrentIndex(index => (index + itemsPerPage) % components.length);
  };

  const displayedComponents = components.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="roller-container">
      <button onClick={handleRoll}>Roll</button>
      <div className="current-components">
        {displayedComponents.map((component, index) => (
          <div key={index} className="component">
            {component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roller;
