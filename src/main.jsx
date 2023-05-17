import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyles } from "./styles/Global.jsx";
import {
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import { Context } from "./context/Context.jsx";
import Login from "./pages/Login/Login.jsx";
import ViewMoreScreen from "./components/ViewMoreScreen/ViewMoreScreen.jsx";
import Register from "./pages/Register/Register.jsx";
import { ContextUser } from "./context/UserAccount.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextUser>
			<Context>
				<GlobalStyles />
				<RouterProvider router={router}>
					<App />
				</RouterProvider>
			</Context>
		</ContextUser>
	</React.StrictMode>
);
