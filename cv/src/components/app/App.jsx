import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import NotFound from '../../pages/not-found/NotFound';
import Header from '../header/Header';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				{/* <Route path="/plants" element={<Plants />} />
		<Route path="/plants/:plantId" element={<Plant />} />
		<Route path="/wishlist" element={<Wishlist />} />
		<Route path="/profile" element={<Profile />} />
		<Route path="/login" element={<LogPage />} />
		<Route path="/Plants/:categorie" element={<PlantCat />} />
		 */}
				<Route path="*" element={<NotFound />} />
			</Routes>
			{/* <Footer /> */}
		</>
	);
};

export default App;
