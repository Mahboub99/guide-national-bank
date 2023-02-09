//import logo from './logo.svg';
import {
	BrowserRouter as Router,
  Route,
  Routes,
 } from 'react-router-dom'; 

import Home from './pages/Home/Home';
import Introduction from './pages/Introduction/Introduction';
import Footer from './components/Footer/Footer';

import Registration from './pages/Registr/Registration';
import RegisterCompleted from './pages/RegisterCompleted/RegisterCompleted';

import './App.css';

function App() {

  return (
    <div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/introduction" element={<Introduction />} />
					<Route path="/registration" element={<Registration />} />
					<Route path="/registerCompleted" element={<RegisterCompleted />} />
				</Routes>
			</Router>
			<Footer />
    </div>
  );
}

export default App;
