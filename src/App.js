//import logo from './logo.svg';
import {
	HashRouter  as Router,
  Route,
  Routes,
 } from 'react-router-dom'; 

import Home from './pages/Home/Home';
import Introduction from './pages/Introduction/Introduction';
import Footer from './components/Footer/Footer';
import Registration from './pages/Registr/Registration';
import RegisterCompleted from './pages/RegisterCompleted/RegisterCompleted';
import TrainingPlan from './pages/TrainingPlan/TrainingPlan';
import PDFpage from './components/PDFpage/PDFpage';
import Header from './components/Header/Header';

import './App.css';

function App() {

  return (
    <div className="App">
			<Header />
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/introduction" element={<Introduction />} />
					<Route path="/registration" element={<Registration />} />
					<Route path="/registerCompleted" element={<RegisterCompleted />} />
					<Route path="/trainingPlan" element={<TrainingPlan />} />
					{/* <Route path="/pdf" element={<PDFpage />} /> */}
				</Routes>
			</Router>
			<Footer />
    </div>
  );
}
	 	
export default App;

