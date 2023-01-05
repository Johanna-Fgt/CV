import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../../pages/home/Home';
import Skills from '../../pages/skills/Skills';
import Education from '../../pages/education/Education';
import Experiences from '../../pages/experiences/Experiences';
import Portfolio from '../../pages/portfolio/Portfolio';
import NotFound from '../../pages/not-found/NotFound';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/education" element={<Education />} />
				<Route path="/experiences" element={<Experiences />} />
				<Route path="/portfolio" element={<Portfolio />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			{/* <Footer /> */}
		</>
	);
};

export default App;
