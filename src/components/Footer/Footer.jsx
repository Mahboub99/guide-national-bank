// write footer function component react
import React from 'react'
// import 25sana fro,m assets
import leftIMage from '../../assets/25Sana.png' 

// import NBE logo from assets
import rightIMage from '../../assets/NBA.png'

import './Footer.css'

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__left">
				<img class="footer__left--img" src={leftIMage} alt="25sana" />
			</div>
			<div className="footer__right">
				<img class="footer__right--img" src={rightIMage} alt="NBA" />
			</div>
		</footer>
	);
}

export default Footer;

