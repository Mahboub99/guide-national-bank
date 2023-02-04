// react functional component for Home page
import React from 'react';
import { Link } from 'react-router-dom';
import startBage from '../../assets/startBage.png';
import NBEButton from '../../components/NBEButton/NBEButton';

import './Home.css';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<div className="home__left" >
					<p1 className="home__left--text">الدليل الاسترشادي</p1>
					<p1 className="home__left--text">للخطة التدريبية</p1>
				</div>
				<div className="home__right">
					<img className="home__right--image" src={startBage} alt="start page" />
				</div>
			</div>
			<Link to="/introduction" className="home__link">
				<NBEButton text="ابدأ" marginBottom="0px" />
			</Link>
		</div>
	);
}

export default Home;