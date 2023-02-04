// react functional component for Home page
import React from 'react';
import { Link } from 'react-router-dom';
import startBage from '../../assets/startBage.png';

import './Home.css';

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<div className="home__left" >
					<h1 className="home__left--text">الدليل الاسترشادي</h1>
					<h1 className="home__left--text">للخطة التدريبية</h1>
				</div>
				<div className="home__right">
					<img className="home__right--image" src={startBage} alt="start bage image" />
				</div>
			</div>
			<Link to="/teams" className="home__link">
					<button className="home__button">View Teams</button>
			</Link>
		</div>
	);
}

export default Home;