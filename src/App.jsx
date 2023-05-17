import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
	const location = useLocation();

	return (
		<>
			{location.pathname !== "/login" &&
				location.pathname !== "/register" && <Header />}
			<Outlet />
			{location.pathname !== "/login" &&
				location.pathname !== "/register" && <Footer />}
		</>
	);
};

export default App;
