import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
	const location = useLocation();

	return (
		<>
			{location.pathname !== "/login" && <Header />}
			<Outlet />
			{location.pathname !== "/login" && <Footer />}
		</>
	);
};

export default App;
