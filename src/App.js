//import logo from './logo.svg';
import {
	BrowserRouter as Router,
  Route,
  Routes,
 } from 'react-router-dom'; 

import Home  from './pages/Home/Home';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'; 

import './App.css';

function App() {
  return (
    <div className="App">
			<Header />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
			<Footer />
    </div>
  );
}

export default App;
