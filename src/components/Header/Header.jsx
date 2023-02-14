//  header component function react

import React from 'react'
import hrImg from '../../assets/hrNobg.png'
import './Header.css'

function Header() {
	return (
		<div className="header">
			<img className="header__img" src={hrImg} alt="hrImg" />
		</div>
	);
}

export default Header;