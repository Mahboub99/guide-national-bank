// write footer function component react
import React from 'react'
// import 25sana fro,m assets
import clickImg from '../../assets/click.png' 


// import NBE logo from assets
import rightIMage from '../../assets/NBA.png'

// import  GuideModal 
import GuideModal from '../GuideModal/GuideModal'

import './Footer.css'

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__left">
				<GuideModal />
			</div>
			<div className="footer__right">
				<img class="footer__right--img" src={rightIMage} alt="NBA" />
			</div>
		</footer>
	);
}

export default Footer;

