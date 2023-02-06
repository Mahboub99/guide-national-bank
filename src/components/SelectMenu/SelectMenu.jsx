import React, { useState } from 'react';
import './SelectMenu.css';

function SelectMenu(props) {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(props.defaultText);

  const options = ['Recommended', 'Latest', 'Avg Customer Roting', 'Price: Low to High', 'Price: High to Low'];

  const toggleDropdown = () => setOpen(!isOpen);
  const selectOption = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className={`select_wrap ${isOpen ? 'active' : ''}`}>
      <ul className="default_option" onClick={toggleDropdown} dir="rtl">
       <div className="icon">
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
        <li>
          <div className="option">
            <p>{selected}</p>
          </div>
        </li>
      </ul>
      <ul className="select_ul" dir="rtl">
        {props.options.map((option, index) => (
          <li key={index} className={selected === option ? 'active' : ''} onClick={() => selectOption(option)}>
            <div className="option">
              <p>{option}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectMenu;
