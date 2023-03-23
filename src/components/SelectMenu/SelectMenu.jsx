import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRegister } from '../../redux/registerSlice'; 
import { setGroupName } from '../../redux/groupNameSlice';


import './SelectMenu.css';

function SelectMenu(props) {
  const [isOpen, setOpen] = useState(false);

  const diplayedText = localStorage.getItem(props.defaultText);
  
  const [selected, setSelected] = useState(diplayedText || props.defaultText);
  const toggleDropdown = () => setOpen(!isOpen);
  const dispatch = useDispatch();
  const selectOption = (option) => {
    // save the selected option in the local storage with the name of defaultText
    localStorage.setItem(props.defaultText, option);
    setSelected(option);
    dispatch(setRegister({value: props.nextChoice}));
    dispatch(setGroupName({value: option}));

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
