import React, { useContext } from "react";
import { Container } from "../../styles/Container/Container";
import "./styles.css";
import { ContextProvider } from "../../context/Context";

const Popup = () => {
	const { setIsLogged, isLogged } = useContext(ContextProvider);

	const logout = () => {
		if (isLogged === true) {
			setIsLogged(false);
		}
	};

	return (
		<Container
			dir="column"
			className="popup"
			height="200px"
			width="110px"
		>
			<div className="triangle"></div>
			<ul>
				<li>Trocar de conta</li>
				<li>Trocar foto</li>
				<li onClick={logout}>Sair</li>
			</ul>
		</Container>
	);
};

export default Popup;
