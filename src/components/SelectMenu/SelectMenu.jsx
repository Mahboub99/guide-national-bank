import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setRegister } from '../../redux/registerSlice'; 


import './SelectMenu.css';

function SelectMenu(props) {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(props.defaultText);
  const toggleDropdown = () => setOpen(!isOpen);
  const selectOption = (option) => {
    // save the selected option in the local storage with the name of defaultText
    localStorage.setItem(props.defaultText, option);
    setSelected(option);
    dispatch(setRegister({value: props.nextChoice}));
    setOpen(false);
  };
  const  register = useSelector((state) => state.register.value);
  const dispatch = useDispatch();

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
