// react functional component for Home page
import React from 'react';
import { Link } from 'react-router-dom';
import startBage from '../../assets/startBage.png';
import NBEButton from '../../components/NBEButton/NBEButton';

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../redux/counterSlice'

import './Home.css';

function Home() {
	const count = useSelector((state) => state.counter.value)
	const dispatch = useDispatch()

	return (
		<div className="home">
			<div className="home__container">
				<div className="home__left" >
					<p1 className="home__left--text wider">مسارات التطوير</p1>
					<p1 className="home__left--text wider">2023/2024</p1>
				</div>
				<div className="home__right">
					<img className="home__right--image" src={startBage} alt="start page" />
				</div>
			</div>
			<Link to="/introduction" className="home__link">
				<NBEButton text="ابدأ" marginBottom="0px" width="150px"/>
			</Link>
		</div>
	);
}

export default Home;